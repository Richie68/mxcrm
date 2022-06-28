<?php
namespace App\Http\Controllers;

use Illuminate\Support\Facades\Auth;
use App\Models\User;
use Inertia\Inertia;
use Inertia\Response;
use Request;

class EmployeeController
{
    public function index() : Response
    {
        $users = User::query()
                ->with('branch', 'emails')
                ->when(Request::input('search'), function ($query, $search) {
                    $query->where('firstname', 'like', "%{$search}%")
                        ->orWhere('lastname', 'like', "%{$search}%")
                        ->orWhere('title', 'like', "%{$search}%");
                })
                ->paginate(10)
                ->withQueryString()
                ->through(function ($user) {
                    return [
                        'id' => $user->id,
                        'uuid' => $user->uuid,
                        'title' => $user->title,
                        'firstname' => $user->firstname,
                        'lastname' => $user->lastname,
                        'fullname' => $user->fullname,
                        'branch' => $user->branch,
                        'emails' => $user->emails,
                        'addresses' => $user->addresses,
                        'created_at' => $user->created_at,
                        'phone_work' => $user->phone_work,
                        'phone_mobil' => $user->phone_mobil,
                        'department' => $user->department,
                        'status' => $user->status,
                        'profile_photo_path' => $user->profile_photo_path,
                        'profile_photo_url' => $user->profile_photo_url,
                        'userCanUpdate' => Auth::user()->can('update', $user)
                    ];
                });

        return Inertia::render('Empleados/Index', [
            'users' => $users,
            'filters' => Request::only(['search']),
            'can' => [
                'createUser' => Auth::user()->can('create', User::class)
            ]
        ]);
    }

    public function create() : Response
    {
        return Inertia::render('Empleados/Create');
    }

    public function show(User $user) : Response
    {
        return Inertia::render('Empleados/Show', [
            'empleado' => $user->load('emails', 'branch:id,name', 'addresses')
        ]);
    }
}
