<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Supplier;
use Illuminate\Http\Request;
use Inertia\Response;

class SupplierController extends Controller
{
    public function index() : Response
    {
        return Inertia::render('Suppliers/Index');
    }

    public function create() : Response
    {
        return Inertia::render('Suppliers/Create');
    }

    public function show(Supplier $supplier)
    {
        return Inertia::render('Suppliers/Show', [
            'thesupplier' => $supplier->load('emails', 'creator', 'assigned', 'addresses')
        ]);
    }
}
