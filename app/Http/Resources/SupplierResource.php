<?php

namespace App\Http\Resources;

use App\Http\Resources\EmailResource;
use Illuminate\Http\Resources\Json\JsonResource;

class SupplierResource extends JsonResource
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
            'name' => $this->name,
            'description' => $this->description,
            'code' => $this->code,
            'razon_social' => $this->razon_social,
            'rfc' => $this->rfc,
            'phone_work' => $this->phone_work,
            'website' => $this->website,
            'status' => $this->status,
            'created_by' => $this->created_by,
            'assigned_to' => $this->assigned_to,
            'creator' => $this->whenLoaded('creator'),
            'assigned' => $this->whenLoaded('assigned'),
            'emails' => EmailResource::collection($this->whenLoaded('emails')),
            'addresses' => AddressResource::collection($this->whenLoaded('addresses')),
        ];
    }
}
