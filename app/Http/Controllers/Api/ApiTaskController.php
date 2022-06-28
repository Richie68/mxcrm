<?php

namespace App\Http\Controllers\Api;

use App\Models\Task;
use Illuminate\Http\Request;
use App\Http\Resources\TaskResource;
use Carbon\Carbon;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Validator;

class ApiTaskController
{
    public function index()
    {
        return TaskResource::collection(Task::with('creator')->get());
    }

    public function show($uuid)
    {
        $contact = Task::where('uuid', $uuid)->first();

        return new TaskResource($contact->load('assigned', 'addresses', 'emails'));
    }

    public function store(Request $request)
    {
        Validator::make($request->all(), [
            'title' => ['required', 'max:50'],
            'start_date' => ['required', 'date'],
            'start_time' => ['required', 'string'],
            'end_date' => ['required', 'date'],
            'end_time' => ['required', 'string'],
            'priority' => ['required', 'integer'],
            'assigned_to' => ['nullable', 'string'],
            'created_by' => ['nullable', 'string'],
            'contact_uuid' => ['nullable', 'string'],
            'body' => ['nullable', 'string'],
            'state' => ['required', 'integer'],
            'notify' => ['required', 'boolean'],
            'minutes' => ['required', 'integer'],
        ])->validate();

        $data = $request->all();

        $data['duration'] = $this->setDuration($data);
        $data['notification_date'] = $this->setNotificationDate($data);

        $task = Task::create($data);

        return $task;
    }

    public function update($uuid, Request $request)
    {
        $data = $request->validate([
            'title' => ['nullable', 'max:50'],
            'start_date' => ['required', 'date'],
            'start_time' => ['required', 'time'],
            'end_date' => ['required', 'date'],
            'end_time' => ['required', 'time'],
            'priority' => ['required', 'string'],
            'assigned_to' => ['nullable', 'string'],
            'contact_uuid' => ['nullable', 'string'],
            'body' => ['nullable', 'string'],
            'state' => ['nullable', 'integer'],
        ]);

        $task = Task::where('uuid', $uuid)->first();

        $task->update($data);

        return $task->fresh();
    }

    private function setDuration($data)
    {
        $start = Carbon::createFromDate($data['start_date'] . ' ' . $data['start_time']);
        $end = Carbon::createFromDate($data['end_date'] . ' ' . $data['end_time']);

        return $start->diffInMinutes($end, false);
    }

    private function setNotificationDate($data)
    {
        return Carbon::createFromDate($data['start_date'] . ' ' . $data['start_time'])
                    ->addMinutes($data['minutes']);
    }
}
