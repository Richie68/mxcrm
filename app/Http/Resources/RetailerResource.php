<?php

namespace App\Http\Resources;

use App\Http\Resources\TaskResource;
use Illuminate\Http\Resources\Json\JsonResource;

class RetailerResource extends JsonResource
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
            'status' => $this->status,
            'created_by' => $this->created_by,
            'website' => $this->website,
            'branch_uuid' => $this->branch_uuid,
            'creator' => $this->whenLoaded('creator'),
            'assigned' => $this->whenLoaded('assigned'),
            'branch' => $this->whenLoaded('branch'),
            'tasks' => TaskResource::collection($this->whenLoaded('tasks'))
        ];
    }
}
