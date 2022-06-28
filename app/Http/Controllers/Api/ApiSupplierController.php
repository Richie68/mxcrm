<?php

namespace App\Http\Controllers\Api;

use App\Models\Supplier;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use App\Http\Resources\SupplierResource;

class ApiSupplierController
{
    public function index()
    {
        $suppliers = Supplier::with('emails', 'assigned', 'creator', 'addresses')
                        ->orderBy('name')
                        ->get();

        return SupplierResource::collection($suppliers);
    }

    public function store(Request $request)
    {
        $data = $request->all();

        $request->validate([
                'name' => ['required', 'string', 'max:50'],
                'created_by' => ['required', 'string'],
                'assigned_to' => ['nullable', 'string'],
                'description' => ['nullable', 'string'],
                'code' => ['nullable', 'string'],
                'razon_social' => ['nullable', 'string'],
                'rfc' => ['nullable', 'string'],
                'phone_work' => ['required', 'string'],
                'website' => ['nullable', 'url'],
                'status' => ['required', 'boolean']
        ]);

        if ($request->has('website') && strlen($request->website) < 8) {
            $data['website'] = null;
        }

        $supplier = Supplier::create($data);

        if ($request->has('email')) {
            $supplier->emails()->create([
                'email' => $request->email,
                'main' => 1
            ]);
        }

        return Redirect::route('catalogos.suppliers.index');
    }

    public function show(Supplier $supplier)
    {
        return new SupplierResource($supplier->load('emails', 'assigned', 'creator', 'addresses'));
    }

    public function update(Request $request, Supplier $supplier)
    {
        $request->validate([
                'name' => ['required', 'string', 'max:50'],
                'created_by' => ['required', 'string'],
                'assigned_to' => ['nullable', 'string'],
                'description' => ['nullable', 'string'],
                'code' => ['nullable', 'string'],
                'razon_social' => ['nullable', 'string'],
                'rfc' => ['nullable', 'string'],
                'phone_work' => ['required', 'string'],
                'website' => ['nullable', 'url'],
                'status' => ['required', 'boolean']
        ]);

        return $supplier->update($request->all());
    }

    public function addEmail(Supplier $supplier, Request $request)
    {
        if ($request->main) {
            $mainEmail = $supplier->emails()->where('main', 1)->first();

            if ($mainEmail) {
                $mainEmail->update(['main' => 0]);
            }
        }

        $supplier->emails()->create([
            'email' => $request->email,
            'main' => $request->main
        ]);

        return $supplier->emails;
    }

    public function addAddress(Supplier $supplier, Request $request)
    {
        $attributes = $request->validate([
            'address' => ['required', 'string', 'max:255'],
            'city' => ['required', 'string', 'max:255'],
            'state' => ['required', 'string', 'max:255'],
            'country' => ['required', 'string', 'max:255'],
            'zip' => ['required', 'string', 'max:255'],
            'status' => ['required', 'boolean'],
            'type' => ['required', 'string', 'max:255'],
            'referencias' => ['nullable', 'string'],
        ]);

        $supplier->addresses()->create($attributes);

        return $supplier->addresses;
    }

    public function search(Request $request)
    {
        return Supplier::query()
            ->where('name', 'like', "%{$request->search}%")
            ->orWhere('code', 'like', "%{$request->search}%")
            ->orWhere('description', 'like', "%{$request->search}%")
            ->get()
            ->map(function ($category) {
                return [
                'id' => $category->id,
                'uuid' => $category->uuid,
                'name' => $category->name,
                ];
            });
    }
}
