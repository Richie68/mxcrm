<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class AgencyResource extends JsonResource
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
            'uuid' => $this->uuid,
            'name' => $this->name,
            'description' => $this->description,
            'status' => $this->status,
            'created_by' => $this->created_by,
            'branch_uuid' => $this->branch_uuid,
            'website' => $this->website,
            'creator' => $this->whenLoaded('creator'),
            'branch' => $this->whenLoaded('branch'),
            'assigned' => $this->whenLoaded('assigned'),
        ];
    }
}
