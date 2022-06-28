<?php

namespace App\Http\Controllers;

use App\Models\Branch;
use App\Models\Hotel;
use Inertia\Inertia;
use Inertia\Response;
use Request;

class HotelController
{
    public function __invoke() : Response
    {
        $hotels = Hotel::query()
                ->with('assigned', 'creator', 'branch')
                ->when(Request::input('search'), function ($query, $search) {
                    return $query->where('name', 'like', "%{$search}%")
                            ->orWhere('description', 'like', "%{$search}%");
                })
                ->orderBy('name')
                ->paginate(40)
                ->withQueryString()
                ->through(function ($hotel) {
                    return [
                        'id' => $hotel->id,
                        'uuid' => $hotel->uuid,
                        'name' => $hotel->name,
                        'description' => $hotel->description,
                        'status' => $hotel->status,
                        'created_by' => $hotel->created_by,
                        'user_id' => $hotel->user_id,
                        'assigned' => $hotel->assigned,
                        'creator' => $hotel->creator,
                        'branch_uuid' => $hotel->branch_uuid,
                        'branch' => $hotel->branch,
                    ];
                });

        return Inertia::render('Hotels/Index', [
            'thehotels' => $hotels,
            'branches' => Branch::where('status', 1)
                            ->orderBy('name')
                            ->select('id', 'uuid', 'name')
                            ->get(),
            'filters' => Request::only(['search']),
            'can' => [
                'createHotel' => \Auth::user()->can('create', Hotel::class)
            ]
        ]);
    }
}
