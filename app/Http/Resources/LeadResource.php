<?php

namespace App\Http\Resources;

use App\Http\Resources\EmailResource;
use Illuminate\Http\Resources\Json\JsonResource;

class LeadResource extends JsonResource
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
            'salutation' => $this->salutation,
            'firstname' => $this->firstname,
            'lastname' => $this->lastname,
            'phone_mobil' => $this->phone_mobil,
            'title' => $this->title,
            'department' => $this->department,
            'company' => $this->company,
            'empresa' => $this->whenLoaded('empresa'),
            'assigned' => $this->whenLoaded('assigned'),
            'referred' => $this->whenLoaded('referred'),
            'contact' => $this->whenLoaded('contact'),
            'emails' => EmailResource::collection($this->whenLoaded('emails')),
            'description' => $this->description,
            'call' => $this->call,
            'assistant' => $this->assistant,
            'assistant_phone' => $this->assistant_phone,
            'converted' => $this->converted,
            'source' => $this->source,
            'source_description' => $this->source_description,
            'status' => $this->status,
            'status_description' => $this->status_description,
            'website' => $this->status
        ];
    }
}
