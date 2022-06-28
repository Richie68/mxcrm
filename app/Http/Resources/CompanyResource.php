<?php

namespace App\Http\Resources;

use App\Http\Resources\EmailResource;
use App\Http\Resources\AddressResource;
use Illuminate\Http\Resources\Json\JsonResource;

class CompanyResource extends JsonResource
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
            'phone_work' => $this->phone_work,
            'phone_fax' => $this->phone_fax,
            'website' => $this->status,
            'description' => $this->description,
            'type' => $this->type,
            'industry' => $this->industry,
            'anual_revenue' => $this->anual_revenue,
            'amount_employees' => $this->amount_employees,
            'assigned' => $this->whenLoaded('assigned'),
            'emails' => EmailResource::collection($this->whenLoaded('emails')),
            'addresses' => AddressResource::collection($this->whenLoaded('addresses')),
            'facturacion' => AddressResource::collection($this->whenLoaded('facturacion')),
            'principal' => AddressResource::collection($this->whenLoaded('principal')),
        ];
    }
}
