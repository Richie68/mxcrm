<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class ProductResource extends JsonResource
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
            'code' => $this->code,
            'cost' => $this->cost,
            'price' => $this->price,
            'name' => $this->name,
            'currency' => $this->currency,
            'type' => $this->type,
            'supplier_uuid' => $this->supplier_uuid,
            'category_uuid' => $this->category_uuid,
            'assigned_to' => $this->assigned_to,
            'created_by' => $this->created_by,
            'status' => $this->status,
            'description' => $this->description,
            'description_es' => $this->description_es,
            'assigned' => $this->whenLoaded('assigned'),
            'category' => $this->whenLoaded('category'),
            'creator' => $this->whenLoaded('creator'),
            'category' => $this->whenLoaded('category'),
            'supplier' => $this->whenLoaded('supplier'),
        ];
    }
}
