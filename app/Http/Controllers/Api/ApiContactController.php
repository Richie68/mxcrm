<?php

namespace App\Http\Controllers\Api;

use App\Http\Resources\ContactResource;
use App\Models\Contact;
use App\Models\Task;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Validator;

class ApiContactController
{
    public function index()
    {
        return ContactResource::collection(Contact::with('emails', 'addresses', 'creator', 'tasks', 'origin', 'branch')->get());
    }

    public function show($uuid)
    {
        $contact = Contact::where('uuid', $uuid)->first();

        return new ContactResource(
            $contact->load('assigned', 'addresses', 'emails', 'tasks', 'tasks.creator', 'tasks.assigned', 'branch', 'origin')
        );
    }

    public function store(Request $request)
    {
        Validator::make($request->all(), [
                'salutation' => ['nullable', 'max:50'],
                'firstname' => ['required', 'max:50'],
                'lastname' => ['required', 'max:50'],
                'phone_mobil' => ['nullable', 'string'],
                'phone_work' => ['nullable', 'string'],
                'phone_fax' => ['nullable', 'string'],
                'title' => ['nullable', 'string'],
                'department' => ['nullable', 'string'],
                'company' => ['nullable', 'string'],
                'company_id' => ['nullable', 'string'],
                'assigned_to' => ['nullable', 'string'],
                'description' => ['nullable', 'string'],
                'call' => ['nullable', 'boolean'],
                'assistant' => ['nullable', 'string'],
                'assistant_phone' => ['nullable', 'string'],
                'source' => ['required', 'string'],
                'status' => ['required', 'string'],
                'created_by' => ['nullable', 'string'],
                'branch_uuid' => ['nullable', 'string'],
                'origin_uuid' => ['nullable', 'string'],
        ])->validate();

        $contact = Contact::create($request->safe());

        if ($request->has('email')) {
            $contact->emails()->create([
                'email' => $request->email,
                'main' => 1
            ]);
        }


        return Redirect::route('contacts.index');
    }

    public function update(Contact $contact, Request $request)
    {
        $attributes = Validator::make($request->all(), [
                'salutation' => ['nullable', 'max:50'],
                'firstname' => ['required', 'max:50'],
                'lastname' => ['required', 'max:50'],
                'phone_mobil' => ['nullable', 'string'],
                'phone_work' => ['nullable', 'string'],
                'phone_fax' => ['nullable', 'string'],
                'title' => ['nullable', 'string'],
                'department' => ['nullable', 'string'],
                'company' => ['nullable', 'string'],
                'company_id' => ['nullable', 'string'],
                'assigned_to' => ['nullable', 'string'],
                'description' => ['nullable', 'string'],
                'call' => ['nullable', 'boolean'],
                'assistant' => ['nullable', 'string'],
                'assistant_phone' => ['nullable', 'string'],
                'source' => ['required', 'string'],
                'status' => ['required', 'string'],
                'created_by' => ['nullable', 'string'],
                'branch_uuid' => ['nullable', 'string'],
                'origin_uuid' => ['nullable', 'string'],
        ])->validate();

        $contact->update($attributes);

        return response(['success' => 'Contacto actualizado.'], 200);
    }

    public function convert(Contact $contact, Request $request)
    {
        $data = $request->validate([
            'assigned_to' => ['nullable', 'string'],
            'assistant' => ['nullable', 'string'],
            'assistant_phone' => ['nullable', 'string'],
            'call' => ['nullable', 'boolean'],
            'company' => ['nullable', 'string'],
            'company_id' => ['nullable', 'string'],
            'created_by' => ['required', 'string'],
            'department' => ['nullable', 'string'],
            'description' => ['nullable', 'string'],
            'firstname' => ['required', 'max:50'],
            'lastname' => ['required', 'max:50'],
            'phone_fax' => ['nullable', 'string'],
            'phone_mobil' => ['nullable', 'string'],
            'phone_work' => ['nullable', 'string'],
            'salutation' => ['nullable', 'max:50'],
            'source' => ['nullable', 'string'],
            'status' => ['nullable', 'string'],
            'title' => ['nullable', 'string'],
            'website' => ['nullable', 'string'],
        ]);

        $data['converted'] = 1;
        $data['status'] = 'convertido';
        $data['source'] = null;

        $lead = \App\Models\Lead::create($data);

        $contact->status = 'convertido';
        $contact->lead_uuid = $lead->uuid;
        $contact->save();

        return $lead;
    }

    public function search(Request $request)
    {
        return Contact::query()
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

    public function addAddress(Contact $contact, Request $request)
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

        $contact->addresses()->create($attributes);

        return $contact->addresses;
    }

    public function addEmail(Contact $contact, Request $request)
    {
        if ($request->main) {
            $mainEmail = $contact->emails()->where('main', 1)->first();

            if ($mainEmail) {
                $mainEmail->update(['main' => 0]);
            }
        }

        $contact->emails()->create([
            'email' => $request->email,
            'main' => $request->main
        ]);

        return $contact->fresh()->emails;
    }

    public function addTask(Contact $contact, $uuid)
    {
        $task = Task::where('uuid', $uuid)->first();

        $contact->tasks()->save($task);

        return $contact->tasks;
    }
}
