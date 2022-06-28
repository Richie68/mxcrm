<?php

namespace App\Http\Controllers\Api;

use App\Models\Group;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Str;

class ApiGroupController
{
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => ['required', 'string'],
            'department' => ['required', 'string'],
            'notes' => ['nullable', 'string'],
            'type' => ['nullable', 'string'],
            'hotel' => ['required', 'string'],
            'pax' => ['nullable', 'integer'],
            'status' => ['nullable', 'string'],
            'source' => ['nullable', 'string'],
            'start_date' => ['required', 'date'],
            'end_date' => ['required', 'date'],
            'source_location' => ['nullable', 'string'],
            'estimated_activities' => ['nullable', 'integer'],
            'estimated_transportation' => ['nullable', 'integer'],
            'estimated_events' => ['nullable', 'integer'],
            'currency' => ['nullable', 'string'],
            'company_uuid' => ['required', 'string'],
            'agency_uuid' => ['required', 'string'],
            'created_by' => ['required', 'string'],
            'assigned_to' => ['nullable', 'string'],
            'manager_uuid' => ['nullable', 'string'],
            'executive_uuid' => ['nullable', 'string'],
            'executive_aditional' => ['nullable', 'string'],
            'lead_uuid' => ['nullable', 'string'],
            'contact_uuid' => ['nullable', 'string'],
            'campaign_uuid' => ['nullable', 'string'],
            'status' => ['nullable', 'string']
        ]);

        $validated = $validator->validate();

        $validated['folio'] = $this->getFolio();

        return Group::create($validated);
    }

    public function update(Group $group, Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => ['required', 'string'],
            'department' => ['required', 'string'],
            'notes' => ['nullable', 'string'],
            'type' => ['nullable', 'string'],
            'hotel' => ['required', 'string'],
            'pax' => ['nullable', 'integer'],
            'status' => ['nullable', 'string'],
            'source' => ['nullable', 'string'],
            'start_date' => ['required', 'date'],
            'end_date' => ['required', 'date'],
            'source_location' => ['nullable', 'string'],
            'estimated_activities' => ['nullable', 'integer'],
            'estimated_transportation' => ['nullable', 'integer'],
            'estimated_events' => ['nullable', 'integer'],
            'currency' => ['nullable', 'string'],
            'company_uuid' => ['required', 'string'],
            'agency_uuid' => ['required', 'string'],
            'created_by' => ['required', 'string'],
            'assigned_to' => ['nullable', 'string'],
            'manager_uuid' => ['nullable', 'string'],
            'executive_uuid' => ['nullable', 'string'],
            'executive_aditional' => ['nullable', 'string'],
            'lead_uuid' => ['nullable', 'string'],
            'contact_uuid' => ['nullable', 'string'],
            'campaign_uuid' => ['nullable', 'string'],
            'status' => ['integer']
        ]);

        $group->update($validator->validate());

        return response(['success' => 'Empleado actualizado.'], 200);
    }

    private function getFolio()
    {
        $lastFolio = Group::select('folio')->latest()->first();

        $newFolio = Str::replace('TLN', '', $lastFolio ? $lastFolio->folio : 'TLN000');

        return 'TLN' . sprintf("%0".strlen($newFolio)."d", $newFolio + 1);
    }
}
