<?php

namespace App\Http\Controllers\Api;

use App\Models\Agency;
use Illuminate\Http\Request;
use App\Http\Resources\AgencyResource;

class ApiAgencyController
{
    public function index()
    {
        $agencies = Agency::with('creator', 'assigned', 'branch')
                        ->orderBy('name')
                        ->get();

        return AgencyResource::collection($agencies);
    }

    public function store(Request $request)
    {
        $attributes = $request->validate([
            'name' => ['required', 'max:50'],
            'created_by' => ['required', 'string'],
            'assigned_to' => ['nullable', 'string'],
            'description' => ['nullable', 'string'],
            'website' => ['nullable', 'url', 'min:8'],
            'status' => ['required', 'boolean'],
            'branch_uuid' => ['nullable', 'string']
        ]);

        return Agency::create($attributes);
    }

    public function update(Request $request, Agency $agency)
    {
        $attributes = $request->validate([
            'name' => ['required', 'max:50'],
            'created_by' => ['required', 'string'],
            'assigned_to' => ['nullable', 'string'],
            'description' => ['nullable', 'string'],
            'website' => ['nullable', 'url', 'min:8'],
            'status' => ['required', 'boolean'],
            'branch_uuid' => ['nullable', 'string']
        ]);

        return $agency->update($attributes);
    }

    public function show(Agency $agency)
    {
        return new AgencyResource($agency->load('creator', 'assigned', 'branch'));
    }

    public function destroy(Agency $agency)
    {
        return $agency->delete();
    }

    public function search(Request $request)
    {
        return Agency::where('name', 'like', "%{$request->search}%")
                        ->orWhere('website', 'like', "%{$request->search}%")
                        ->orderBy('name')
                        ->get()
                        ->map(function ($company) {
                            return [
                            'id' => $company->id,
                            'uuid' => $company->uuid,
                            'name' => $company->name,
                            'website' => $company->name
                            ];
                        });
    }
}
