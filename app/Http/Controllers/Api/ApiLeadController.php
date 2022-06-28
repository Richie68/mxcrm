<?php

namespace App\Http\Controllers\Api;

use App\Http\Requests\LeadRequest;
use App\Http\Resources\LeadResource;
use App\Models\Lead;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Validator;

class ApiLeadController
{
    public function index()
    {
        $leads = Lead::with('emails', 'assigned', 'referred', 'empresa', 'contact')
                ->orderBy('firstname')
                ->get();

        return LeadResource::collection($leads);
    }

    public function store(LeadRequest $request)
    {
        $data = $request->validated();

        if ($request->has('website') && strlen($request->website) < 8) {
            $data['website'] = null;
        }

        $lead = Lead::create($data);

        if ($request->has('email')) {
            $lead->emails()->create([
                'email' => $request->email,
                'main' => 1
            ]);
        }

        return Redirect::route('ventas.leads.index');
    }

    public function update(LeadRequest $request, Lead $lead)
    {
        $lead->update($request->validated());

        return response(['message' => 'Lead actualizado'], 200);
    }

    public function show(Lead $lead)
    {
        return $lead->load('emails', 'assigned', 'referred', 'addresses', 'empresa', 'contact');
    }

    public function addEmail(Lead $lead, Request $request)
    {
        if ($request->main) {
            $mainEmail = $lead->emails()->where('main', 1)->first();

            if ($mainEmail) {
                $mainEmail->update(['main' => 0]);
            }
        }

        $lead->emails()->create([
            'email' => $request->email,
            'main' => $request->main
        ]);

        return $lead->fresh()->emails;
    }

    public function addAddress(Lead $lead, Request $request)
    {
        $attributes = $request->validate([
            'address' => ['required', 'string', 'max:255'],
            'city' => ['required', 'string', 'max:255'],
            'state' => ['required', 'string', 'max:255'],
            'country' => ['required', 'string', 'max:255'],
            'zip' => ['required', 'string', 'max:255'],
            'status' => ['required', 'boolean'],
            'type' => ['required', 'string', 'max:255'],
            'referencias' => ['nullable', 'string'],
        ]);

        $lead->addresses()->create($attributes);

        return response(['message' => 'Address added to the Lead']);
    }

    public function search(Request $request)
    {
        return Lead::query()
            ->where('firstname', 'like', "%{$request->search}%")
            ->orWhere('lastname', 'like', "%{$request->search}%")
            ->get()
            ->map(function ($contact) {
                return [
                'id' => $contact->id,
                'uuid' => $contact->uuid,
                'firstname' => $contact->firstname,
                'lastname' => $contact->lastname,
                'fullname' => $contact->fullname
                ];
            });
    }
}
