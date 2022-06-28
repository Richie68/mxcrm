<?php

namespace App\Http\Controllers;

use App\Models\Retailer;
use Inertia\Inertia;
use Inertia\Response;
use Request;

class RetailerController
{
    public function index() : Response
    {
        $retailers = Retailer::query()
                ->with('creator', 'assigned', 'branch', 'tasks')
                ->when(Request::input('search'), function ($query, $search) {
                    return $query->where('name', 'like', "%{$search}%");
                })
                ->paginate(50)
                ->withQueryString()
                ->through(function ($retailer) {
                    return [
                        'id' => $retailer->id,
                        'uuid' => $retailer->uuid,
                        'name' => $retailer->name,
                        'description' => $retailer->description,
                        'website' => $retailer->website,
                        'created_by' => $retailer->created_by,
                        'creator' => $retailer->creator,
                        'assigned_to' => $retailer->assigned_to,
                        'assigned' => $retailer->assigned,
                        'branch_uuid' => $retailer->branch_uuid,
                        'branch' => $retailer->branch,
                        'status' => $retailer->status,
                        'tasks' => $retailer->tasks
                    ];
                });

        return Inertia::render('Retailer/Index', [
            'retailers' => $retailers,
            'filters' => Request::only(['search']),
            'can' => [
                'createRetailer' => \Auth::user()->can('create', Retailer::class)
            ]
        ]);
    }

    public function create() : Response
    {
        return Inertia::render('Retailer/Create');
    }

    public function show(Retailer $retailer) : Response
    {
        return Inertia::render('Retailer/Show', [
            'theretailer' => $retailer->load('creator', 'assigned', 'branch', 'tasks')
        ]);
    }
}
