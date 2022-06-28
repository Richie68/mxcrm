<?php

namespace App\Http\Controllers\Api;

use App\Models\Hotel;
use Illuminate\Http\Request;

class ApiHotelController
{
    public function store(Request $request)
    {
        $attributes = $request->validate([
                'name' => ['required', 'max:50'],
                'description' => ['nullable', 'string'],
                'user_id' => ['nullable', 'string'],
                'created_by' => ['nullable', 'string'],
                'branch_uuid' => ['nullable', 'string'],
                'status' => ['nullable', 'boolean']
        ]);

        return Hotel::create($attributes);
    }

    public function update(Request $request, Hotel $hotel)
    {
        $attributes = $request->validate([
                'name' => ['nullable', 'max:50'],
                'description' => ['nullable', 'string'],
                'user_id' => ['nullable', 'string'],
                'created_by' => ['nullable', 'string'],
                'branch_uuid' => ['nullable', 'string'],
                'status' => ['required', 'boolean']
        ]);

        $hotel->update($attributes);
    }

    public function destroy(Hotel $hotel)
    {
        return $hotel->delete();
    }

    public function search(Request $request)
    {
        return Hotel::with('branch:id,uuid,name')
                        ->where('name', 'like', "%{$request->search}%")
                        ->orWhere('description', 'like', "%{$request->search}%")
                        ->orderBy('name')
                        ->get()
                        ->map(function ($hotel) {
                            return [
                            'id' => $hotel->id,
                            'uuid' => $hotel->uuid,
                            'name' => $hotel->name,
                            'branch' => $hotel->branch ? $hotel->branch->name : null
                            ];
                        });
    }
}
