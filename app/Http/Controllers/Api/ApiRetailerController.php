<?php

namespace App\Http\Controllers\Api;

use App\Http\Resources\RetailerResource;
use Illuminate\Http\Request;
use App\Models\Retailer;
use App\Models\Task;

class ApiRetailerController
{
    public function index()
    {
        return RetailerResource::collection(
            Retailer::with('creator', 'assigned', 'branch', 'tasks')
                ->orderBy('name')
                ->get()
        );
    }

    public function store(Request $request)
    {
        return Retailer::create($request->validate(
            [
                'name' => ['required', 'max:50'],
                'created_by' => ['required', 'string'],
                'assigned_to' => ['nullable', 'string'],
                'description' => ['nullable', 'string'],
                'branch_uuid' => ['nullable', 'string'],
                'website' => ['nullable', 'url', 'min:7'],
                'status' => ['required', 'boolean']
            ]
        ));
    }

    public function update(Request $request, Retailer $retailer)
    {
        return $retailer->update($request->validate(
            [
                'name' => ['required', 'max:50'],
                'created_by' => ['required', 'string'],
                'assigned_to' => ['nullable', 'string'],
                'description' => ['nullable', 'string'],
                'branch_uuid' => ['nullable', 'string'],
                'website' => ['nullable', 'url'],
                'status' => ['required', 'boolean']
            ]
        ));
    }

    public function show(Retailer $retailer)
    {
        return new RetailerResource($retailer->load('creator', 'assigned', 'branch', 'tasks'));
    }

    public function destroy(Retailer $retailer)
    {
        return $retailer->delete();
    }

    public function search(Request $request)
    {
        return RetailerResource::collection(
            Retailer::query()
                ->with('creator', 'assigned', 'branch')
                ->where('name', 'like', "%{$request->search}%")
                ->orWhere('website', 'like', "%{$request->search}%")
                ->get()
        );
    }

    public function addTask(Retailer $retailer, $uuid)
    {
        $task = Task::where('uuid', $uuid)->first();

        $retailer->tasks()->save($task);

        return $retailer->tasks;
    }

    public function destroyTask(Retailer $retailer, $uuid)
    {
        Task::where('uuid', $uuid)->first()->delete();

        return $retailer->tasks;
    }
}
