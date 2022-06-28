<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Category;
use Inertia\Response;

class CategoryController
{
    public function index() : Response
    {
        return Inertia::render('Categories/Index');
    }

    public function create() : Response
    {
        return Inertia::render('Categories/Create');
    }

    public function show($uuid) : Response
    {
        return Inertia::render('Categories/Show', [
            'thecategory' => Category::where('uuid', $uuid)->first()
        ]);
    }
}
