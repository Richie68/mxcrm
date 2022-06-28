<?php

namespace App\Http\Controllers;

use App\Models\Group;
use Inertia\Inertia;
use Inertia\Response;
use Request;

class GroupController extends Controller
{
    public function index() : Response
    {
        $groups = Group::query()
                ->with('company', 'agency', 'assigned', 'manager', 'executive', 'contact', 'hotels')
                ->when(Request::input('search'), function ($query, $search) {
                    return $query->where('name', 'like', "%{$search}%");
                })
                ->paginate(50)
                ->withQueryString()
                ->through(function ($group) {
                    return [
                        'id' => $group->id,
                        'folio' => $group->folio,
                        'uuid' => $group->uuid,
                        'created_at' => $group->created_at,
                        'start_date' => $group->start_date,
                        'end_date' => $group->end_date,
                        'folio' => $group->folio,
                        'department' => $group->department,
                        'name' => $group->name,
                        'hotel' => $group->hotel,
                        'hotels' => $group->hotels,
                        'company' => $group->company,
                        'contact' => $group->contact,
                        'agency' => $group->agency,
                        'type' => $group->type,
                        'pax' => $group->pax,
                        'assigned' => $group->assigned,
                        'status' => $group->status,
                        'estimated_activities' => $group->estimated_activities,
                        'estimated_transportation' => $group->estimated_transportation,
                        'estimated_events' => $group->estimated_events,
                        'manager' => $group->manager,
                        'executive' => $group->executive
                    ];
                });

        return Inertia::render('Groups/Index', [
            'groups' => $groups,
            'filters' => Request::only(['search']),
            'can' => [
                'createGroup' => \Auth::user()->can('create', Group::class)
            ]
        ]);
    }

    public function create() : Response
    {
        return Inertia::render('Groups/Create');
    }

    public function show(Group $group) : Response
    {
        return Inertia::render('Groups/Show', [
            'thegroup' => $group->load('addresses', 'emails', 'referred', 'assigned', 'empresa', 'contact')
        ]);
    }
}
