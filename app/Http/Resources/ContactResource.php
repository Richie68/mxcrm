<?php

namespace App\Http\Resources;

use App\Http\Resources\TaskResource;
use App\Http\Resources\EmailResource;
use App\Http\Resources\AddressResource;
use Illuminate\Http\Resources\Json\JsonResource;

class ContactResource extends JsonResource
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
            'lead_uuid' => $this->lead_uuid,
            'salutation' => $this->salutation,
            'firstname' => $this->firstname,
            'lastname' => $this->lastname,
            'phone_work' => $this->phone_work,
            'phone_mobil' => $this->phone_mobil,
            'phone_fax' => $this->phone_fax,
            'title' => $this->title,
            'department' => $this->department,
            'company' => $this->company,
            'company_id' => $this->company_id,
            'description' => $this->description,
            'call' => $this->call,
            'assistant' => $this->assistant,
            'assistant_phone' => $this->assistant_phone,
            'source' => $this->source,
            'status' => $this->status,
            'created_by' => $this->created_by,
            'creator' => $this->whenLoaded('creator'),
            'assigned_to' => $this->assigned_to,
            'assigned' => $this->whenLoaded('assigned'),
            'emails' => EmailResource::collection($this->whenLoaded('emails')),
            'addresses' => AddressResource::collection($this->whenLoaded('addresses')),
            'tasks' => TaskResource::collection($this->whenLoaded('tasks')),
            'branch' => $this->whenLoaded('branch'),
            'origin' => $this->whenLoaded('origin'),
        ];
    }
}
