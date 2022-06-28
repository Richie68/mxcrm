<?php

namespace App\Http\Resources;

use App\Http\Resources\AddressResource;
use App\Http\Resources\BranchResource;
use App\Http\Resources\EmailResource;
use Illuminate\Http\Resources\Json\JsonResource;

class EmployeeResource extends JsonResource
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
            'address' => $this->address,
            'branch' => new BranchResource($this->whenLoaded('branch')),
            'emails' => EmailResource::collection($this->whenLoaded('emails')),
            'addresses' => AddressResource::collection($this->whenLoaded('addresses')),
            'city' => $this->city,
            'country' => $this->country,
            'created_at' => $this->created_at,
            'department' => $this->department,
            'description' => $this->description,
            'email' => $this->email,
            'employee_status' => $this->employee_status,
            'firstname' => $this->firstname,
            'fullname' => $this->fullname,
            'is_employee' => $this->is_employee,
            'lastname' => $this->lastname,
            'mainEmail' => $this->mainEmail,
            'level' => $this->level,
            'phone_home' => $this->phone_home,
            'phone_mobil' => $this->phone_mobil,
            'phone_other' => $this->phone_other,
            'phone_work' => $this->phone_work,
            'profile_photo_path' => $this->profile_photo_path,
            'profile_photo_url' => $this->profile_photo_url,
            'receive_notifications' => $this->receive_notifications,
            'state' => $this->state,
            'status' => $this->status,
            'title' => $this->title,
            'updated_at' => $this->updated_at,
            'username' => $this->username,
            'uuid' => $this->uuid,
            'zip' => $this->zip,
        ];
    }
}
