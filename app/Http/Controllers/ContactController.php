<?php

namespace App\Http\Controllers;

use Inertia\Response;
use Request;
use Inertia\Inertia;
use App\Models\Contact;

class ContactController
{
    public function index() : Response
    {
        $contacts = Contact::query()
                ->with('emails', 'addresses', 'creator', 'tasks', 'origin', 'branch')
                ->withCount('tasks')
                ->when(Request::input('search'), function ($query, $search) {
                    return $query->where('lastname', 'like', "%{$search}%")
                            ->orWhere('firstname', 'like', "%{$search}%")
                            ->orWhere('title', 'like', "%{$search}%")
                            ->orWhere('assistant', 'like', "%{$search}%")
                            ->orWhere('company', 'like', "%{$search}%");
                })
                ->paginate(50)
                ->withQueryString()
                ->through(function ($contact) {
                    return [
                        'id' => $contact->id,
                        'uuid' => $contact->uuid,
                        'salutation' => $contact->salutation,
                        'firstname' => $contact->firstname,
                        'lastname' => $contact->lastname,
                        'emails' => $contact->emails,
                        'addresses' => $contact->addresses,
                        'assigned' => $contact->assigned,
                        'branch' => $contact->branch,
                        'branch_uuid' => $contact->branch_uuid,
                        'empresa' => $contact->empresa,
                        'title' => $contact->title,
                        'tasks' => $contact->tasks,
                        'company' => $contact->company,
                        'created_at' => $contact->created_at,
                        'origin_uuid' => $contact->origin_uuid,
                        'origin' => $contact->origin,
                        'phone_mobil' => $contact->phone_mobil,
                        'phone_work' => $contact->phone_work,
                        'department' => $contact->department,
                        'status' => $contact->status,
                    ];
                });

        return Inertia::render('Contact/Index', [
            'contacts' => $contacts,
            'filters' => Request::only(['search']),
            'can' => [
                'createContact' => \Auth::user()->can('create', Contact::class)
            ]
        ]);
    }

    public function create() : Response
    {
        return Inertia::render('Contact/Create');
    }

    public function show(Contact $contact) : Response
    {
        return Inertia::render('Contact/Show', [
            'thecontact' => $contact->load('assigned', 'emails', 'addresses', 'tasks', 'creator', 'origin', 'branch')
        ]);
    }
}
