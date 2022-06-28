<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class GroupResource extends JsonResource
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
            'department' => $this->department,
            'notes' => $this->notes,
            'type' => $this->type,
            'pax' => $this->pax,
            'status' => $this->status,
            'source' => $this->source,
            'start_date' => $this->start_date,
            'end_date' => $this->end_date,
            'source_location' => $this->source_location,
            'estimated_activities' => $this->estimated_activities,
            'estimated_transportation' => $this->estimated_transportation,
            'estimated_events' => $this->estimated_events,
            'hotel' => $this->hotel,
            'company' => $this->whenLoaded($this->company),
            'hotels' => $this->whenLoaded($this->hotels),
            'agency' => $this->whenLoaded($this->agency),
            'created_by' => $this->created_by,
            'creator' => $this->whenLoaded($this->creator),
            'assigned' => $this->whenLoaded($this->assigned),
            'manager' => $this->whenLoaded($this->manager),
            'executive' => $this->whenLoaded($this->executive),
            'executive_additional' => $this->whenLoaded($this->executive_additional),
            'contact' => $this->whenLoaded($this->contact),
            'campaign' => $this->whenLoaded($this->campaign),
        ];
    }
}
