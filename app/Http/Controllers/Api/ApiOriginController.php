<?php

namespace App\Http\Controllers\Api;

use App\Models\Origin;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class ApiOriginController
{
    public function index()
    {
        return Origin::with('branch:id,uuid,name')
                        ->orderBy('name')
                        ->select(['id', 'uuid', 'name', 'status', 'branch_uuid'])
                        ->get();
    }

    public function store(Request $request)
    {
        $attributes = $request->validate([
                'name' => ['required', 'max:50'],
                'note' => ['nullable', 'string'],
                'created_by' => ['required', 'string'],
                'branch_uuid' => ['nullable', 'string'],
                'status' => ['required', 'boolean']
        ]);

        return Origin::create($attributes);
    }

    public function update(Request $request, Origin $origin)
    {
        Validator::make($request->all(), [
                'name' => ['nullable', 'max:50'],
                'note' => ['nullable', 'string'],
                'created_by' => ['required', 'string'],
                'branch_uuid' => ['nullable', 'string'],
                'status' => ['required', 'boolean']
        ])->validate();

        $origin->update($request->only(['branch__uuid', 'note', 'name', 'status']));
    }

    public function search(Request $request)
    {
        return Origin::query()
            ->with('branch:id,uuid,name')
            ->where('status', 1)
            ->where('name', 'like', "%{$request->search}%")
            ->get()
            ->map(function ($category) {
                return [
                'id' => $category->id,
                'uuid' => $category->uuid,
                'name' => $category->name,
                'branch' => $category->branch
                ];
            });
    }

    public function destroy($uuid)
    {
        return Origin::where('uuid', $uuid)->first()->delete();
    }
}
