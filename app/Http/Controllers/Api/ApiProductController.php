<?php

namespace App\Http\Controllers\Api;

use App\Http\Resources\ProductResource;
use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class ApiProductController
{
    public function store(Request $request)
    {
        $data = $request->all();

        Validator::make($data, [
                'name' => ['required', 'max:50'],
                'code' => ['nullable', 'string'],
                'type' => ['required', 'string'],
                'currency' => ['required', 'string'],
                'supplier_uuid' => ['required', 'string'],
                'category_uuid' => ['required', 'string'],
                'created_by' => ['required', 'string'],
                'cost' => ['required', 'integer'],
                'price' => ['required', 'integer'],
                'description' => ['nullable', 'string'],
                'description_es' => ['nullable', 'string'],
                'status' => ['required', 'integer'],
        ])->validate();

        return Product::create($data);
    }

    public function update(Request $request, Product $product)
    {
        $data = $request->all();

        Validator::make($data, [
                'name' => ['required', 'max:50'],
                'code' => ['nullable', 'string'],
                'type' => ['required', 'string'],
                'currency' => ['required', 'string'],
                'supplier_uuid' => ['required', 'string'],
                'category_uuid' => ['required', 'string'],
                'created_by' => ['required', 'string'],
                'cost' => ['required', 'integer'],
                'price' => ['required', 'integer'],
                'description' => ['nullable', 'string'],
                'description_es' => ['nullable', 'string'],
                'status' => ['required', 'integer'],
        ])->validate();


        $product->update($data);
    }

    public function show(Product $product)
    {
        return new ProductResource($product->load('assigned', 'category', 'supplier', 'creator'));
    }
}
