<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class CategoryResource extends JsonResource
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
            'is_parent' => $this->is_parent,
            'status' => $this->status,
            'created_by' => $this->created_by,
            'parent' => $this->whenLoaded('parent'),
            'children' => $this->whenLoaded('children'),
            'creator' => $this->whenLoaded('creator'),
            'assigned' => $this->whenLoaded('assigned'),
            'products' => $this->whenLoaded('products'),
        ];
    }
}
