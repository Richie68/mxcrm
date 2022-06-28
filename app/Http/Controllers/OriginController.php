<?php

namespace App\Http\Controllers;

use App\Models\Branch;
use App\Models\Origin;
use Inertia\Inertia;
use Inertia\Response;
use Request;

class OriginController
{
    public function __invoke(Request $request) : Response
    {
        $origins = Origin::query()
                ->with('branch', 'creator')
                ->when(Request::input('search'), function ($query, $search) {
                    return $query->where('name', 'like', "%{$search}%")
                            ->orWhere('note', 'like', "%{$search}%");
                })
                ->paginate(50)
                ->withQueryString()
                ->through(function ($origin) {
                    return [
                        'id' => $origin->id,
                        'uuid' => $origin->uuid,
                        'name' => $origin->name,
                        'note' => $origin->note,
                        'status' => $origin->status,
                        'created_by' => $origin->created_by,
                        'creator' => $origin->creator,
                        'branch_uuid' => $origin->branch_uuid,
                        'branch' => $origin->branch,
                    ];
                });

        return Inertia::render('Origins/Index', [
            'origins' => $origins,
            'branches' => Branch::where('status', 1)
                            ->orderBy('name')
                            ->select('id', 'uuid', 'name')
                            ->get(),
            'filters' => Request::only(['search', 'page']),
            'can' => [
                'createOrigin' => \Auth::user()->can('create', Origin::class)
            ]
        ]);
    }
}
