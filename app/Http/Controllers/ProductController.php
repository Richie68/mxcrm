<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Inertia\Inertia;
use Inertia\Response;
use Request;

class ProductController extends Controller
{
    public function index() : Response
    {
        $products = Product::query()
                ->with('assigned', 'category', 'supplier')
                ->when(Request::input('search'), function ($query, $search) {
                    return $query->where('name', 'like', "%{$search}%")
                            ->orWhere('code', 'like', "%{$search}%")
                            ->orWhere('description', 'like', "%{$search}%")
                            ->orWhere('description_es', 'like', "%{$search}%");
                })
                ->paginate(10)
                ->withQueryString()
                ->through(function ($product) {
                    return [
                        'id' => $product->id,
                        'uuid' => $product->uuid,
                        'name' => $product->name,
                        'assigned' => $product->assigned,
                        'assigned_uuid' => $product->assigned_uuid,
                        'category' => $product->category,
                        'category_uuid' => $product->category_uuid,
                        'supplier' => $product->supplier,
                        'supplier_uuid' => $product->supplier_uuid,
                        'code' => $product->code,
                        'type' => $product->type,
                        'curreny' => $product->curreny,
                        'cost' => $product->cost,
                        'price' => $product->price,
                        'description' => $product->description,
                        'description_es' => $product->description_es,
                        'status' => $product->status,
                    ];
                });

        return Inertia::render('Products/Index', [
            'products' => $products,
            'filters' => Request::only(['search']),
            'can' => [
                'createProduct' => \Auth::user()->can('create', Product::class)
            ]
        ]);
    }

    public function create() : Response
    {
        return Inertia::render('Products/Create');
    }

    public function show(Product $product) : Response
    {
        return Inertia::render('Products/Show', [
            'theproduct' => $product
        ]);
    }
}
