<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Lead;
use Inertia\Response;
use Request;

class LeadController extends Controller
{
    public function index() : Response
    {
        $leads = Lead::query()
                ->with('emails', 'assigned', 'referred', 'empresa', 'contact')
                ->when(Request::input('search'), function ($query, $search) {
                    return $query->where('lastname', 'like', "%{$search}%")
                            ->orWhere('firstname', 'like', "%{$search}%")
                            ->orWhere('company', 'like', "%{$search}%")
                            ->orWhere('assistant', 'like', "%{$search}%");
                })
                ->paginate(50)
                ->withQueryString()
                ->through(function ($lead) {
                    return [
                        'id' => $lead->id,
                        'uuid' => $lead->uuid,
                        'salutation' => $lead->salutation,
                        'firstname' => $lead->firstname,
                        'lastname' => $lead->lastname,
                        'emails' => $lead->emails,
                        'addresses' => $lead->addresses,
                        'assigned' => $lead->assigned,
                        'empresa' => $lead->empresa,
                        'company' => $lead->company,
                        'contact' => $lead->contact,
                        'created_at' => $lead->created_at,
                        'phone_mobil' => $lead->phone_mobil,
                        'department' => $lead->department,
                        'status' => $lead->status,
                    ];
                });

        return Inertia::render('Leads/Index', [
            'leads' => $leads,
            'filters' => Request::only(['search']),
            'can' => [
                'createLead' => \Auth::user()->can('create', Lead::class)
            ]
        ]);
    }

    public function create() : Response
    {
        return Inertia::render('Leads/Create');
    }

    public function show(Lead $lead) : Response
    {
        return Inertia::render('Leads/Show', [
            'thelead' => $lead->load('addresses', 'emails', 'referred', 'assigned', 'empresa', 'contact')
        ]);
    }
}
