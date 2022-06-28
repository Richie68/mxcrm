<?php

namespace App\Http\Controllers\Api;

use App\Http\Resources\CompanyResource;
use App\Models\Company;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;

class ApiCompanyController
{
    public function index()
    {
        $companies = Company::with('emails', 'assigned', 'addresses', 'facturacion', 'principal')
                            ->orderBy('name')
                            ->get();

        return CompanyResource::collection($companies);
    }

    public function store(Request $request)
    {
        $data = $request->all();

        $request->validate([
                'name' => ['required', 'string', 'max:50'],
                'phone_work' => ['required', 'string'],
                'phone_fax' => ['nullable', 'string'],
                'website' => ['nullable', 'url'],
                'description' => ['nullable', 'string'],
                'assigned_to' => ['nullable', 'string'],
                'type' => ['nullable', 'string'],
                'industry' => ['nullable', 'string'],
                'anual_revenue' => ['nullable', 'string'],
                'amount_employees' => ['nullable', 'string'],
        ]);

        if ($request->has('website') && strlen($request->website) < 8) {
            $data['website'] = null;
        }

        $lead = Company::create($data);

        if ($request->has('email')) {
            $lead->emails()->create([
                'email' => $request->email,
                'main' => 1
            ]);
        }


        return Redirect::route('ventas.companies.index');
    }

    public function show(Company $company)
    {
        return $company->load('assigned', 'emails', 'addresses');
    }

    public function update(Request $request, Company $company)
    {
        $company->update($request->all());
    }

    public function addEmail(Company $company, Request $request)
    {
        if ($request->main) {
            $mainEmail = $company->emails()->where('main', 1)->first();

            if ($mainEmail) {
                $mainEmail->update(['main' => 0]);
            }
        }

        $company->emails()->create([
            'email' => $request->email,
            'main' => $request->main
        ]);

        return $company->emails;
    }

    public function addAddress(Company $company, Request $request)
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

        $company->addresses()->create($attributes);

        return $company->addresses;
    }

    public function search(Request $request)
    {
        return Company::where('name', 'like', "%{$request->search}%")
                        ->orderBy('name')
                        ->get()
                        ->map(function ($company) {
                            return [
                            'id' => $company->id,
                            'uuid' => $company->uuid,
                            'name' => $company->name
                            ];
                        });
    }
}
