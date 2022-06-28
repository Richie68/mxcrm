<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class TaskResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'uuid' => $this->uuid,
            'title' => $this->title,
            'start_date' => $this->start_date,
            'start_time' => $this->start_time,
            'end_date' => $this->end_date,
            'end_time' => $this->end_time,
            'priority' => $this->priority,
            'assigned_to' => $this->assigned_to,
            'assigned' => $this->whenLoaded('assigned'),
            'created_by' => $this->created_by,
            'creator' => $this->whenLoaded('creator'),
            'contact_uuid' => $this->contact_uuid,
            'contact' => $this->whenLoaded('contact'),
            'body' => $this->body,
            'state' => $this->state
        ];
    }
}
