<?php

namespace App\Http\Controllers\Api;

use App\Models\Category;
use Illuminate\Http\Request;
use App\Http\Resources\CategoryResource;

class ApiCategoryController
{
    public function index()
    {
        $categories = Category::with('parent', 'children', 'creator', 'products')
                        ->orderBy('name')
                        ->get();

        return CategoryResource::collection($categories);
    }

    public function store(Request $request)
    {
        $attributes = $request->validate([
            'name' => ['required', 'max:50'],
            'created_by' => ['required', 'string'],
            'assigned_to' => ['nullable', 'string'],
            'is_parent' => ['nullable', 'boolean'],
            'parent_uuid' => ['nullable', 'string'],
            'description' => ['nullable', 'string'],
            'status' => ['required', 'boolean']
        ]);

        return Category::create($attributes);
    }

    public function update(Request $request, Category $category)
    {
        $attributes = $request->validate([
            'name' => ['required', 'max:50'],
            'created_by' => ['required', 'string'],
            'assigned_to' => ['nullable', 'string'],
            'is_parent' => ['nullable', 'boolean'],
            'parent_uuid' => ['nullable', 'string'],
            'description' => ['nullable', 'string'],
            'status' => ['required', 'boolean']
        ]);

        if (!$request->is_parent) {
            $this->updateChildren($category);
        }

        return $category->update($attributes);
    }

    public function show(Category $category)
    {
        return new CategoryResource(
            $category->load('parent', 'children', 'creator', 'assigned', 'products')
        );
    }

    public function destroy(Category $category)
    {
        $this->updateChildren($category);
        $this->updateProducts($category);

        return $category->delete();
    }

    public function search(Request $request)
    {
        return Category::query()
            ->where('name', 'like', "%{$request->search}%")
            ->get()
            ->map(function ($category) {
                return [
                'id' => $category->id,
                'uuid' => $category->uuid,
                'name' => $category->name,
                'is_parent' => $category->is_parent,
                'description' => $category->description,
                ];
            });
    }

    public function removeChild(Category $category)
    {
        return $category->update(['parent_uuid' => null]);
    }

    private function updateChildren($category)
    {
        if ($category->is_parent) {
            $categories = Category::where('parent_uuid', $category->uuid)->get();
            if ($categories->count() > 0) {
                foreach ($categories as $cat) {
                    $cat->update(['parent_uuid' => null]);
                }
            }
        }
    }

    private function updateProducts($category)
    {
        $products = $category->products;

        if ($products->count() == 0) {
            return;
        }

        foreach ($products as $product) {
            $product->category_uuid = null;
            $product->save();
        }
    }
}
