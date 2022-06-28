<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class LeadRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'salutation' => ['nullable', 'max:50'],
            'firstname' => ['required', 'max:50'],
            'lastname' => ['required', 'max:50'],
            'phone_mobil' => ['nullable', 'string'],
            'phone_work' => ['nullable', 'string'],
            'phone_fax' => ['nullable', 'string'],
            'title' => ['nullable', 'string'],
            'department' => ['nullable', 'string'],
            'company' => ['nullable', 'string'],
            'company_id' => ['nullable', 'string'],
            'assigned_to' => ['nullable', 'string'],
            'description' => ['nullable', 'string'],
            'call' => ['nullable', 'boolean'],
            'assistant' => ['nullable', 'string'],
            'assistant_phone' => ['nullable', 'string'],
            'converted' => ['nullable', 'boolean'],
            'referred_by' => ['nullable', 'string'],
            'source' => ['nullable', 'string'],
            'source_description' => ['nullable', 'string'],
            'status' => ['nullable', 'string'],
            'status_description' => ['nullable', 'string'],
            'website' => ['nullable', 'url'],
        ];
    }
}
