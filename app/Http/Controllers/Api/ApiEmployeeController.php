<?php

namespace App\Http\Controllers\Api;

use App\Actions\Fortify\PasswordValidationRules;

use App\Http\Resources\EmployeeResource;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Validator;
use Laravel\Fortify\Rules\Password;

class ApiEmployeeController
{
    use PasswordValidationRules;

    public function index()
    {
        return EmployeeResource::collection(User::with('branch', 'emails', 'addresses')->get());
    }

    public function store(Request $request)
    {
        $data = $request->all();

        Validator::make($data, [
            'firstname' => ['required', 'max:50'],
            'lastname' => ['required', 'max:50'],
            'email' => ['required', 'max:50', 'email'],
            'title' => ['nullable', 'string'],
            'department' => ['nullable', 'string'],
            'phone_mobil' => ['nullable', 'string'],
            'phone_work' => ['nullable', 'string'],
            'phone_home' => ['nullable', 'string'],
            'status' => ['integer'],
            'password' => $this->passwordRules()
        ])->validate();

        $data['username'] = \Str::remove([' ', '_', '-'], strtolower(trim($data['firstname'])));

        $data['password'] = Hash::make($request->password);

        $user = User::create($data);

        $user->emails()->create([
            'email' => $user->email,
            'main' => 1
        ]);

        return Redirect::route('empleados.index');
    }

    public function update(User $employee, Request $request)
    {
        $data = $request->all();

        Validator::make($data, [
            'firstname' => ['required', 'max:50'],
            'lastname' => ['required', 'max:50'],
            'email' => ['required', 'max:50', 'email'],
            'title' => ['nullable', 'string'],
            'department' => ['nullable', 'string'],
            'phone_mobil' => ['nullable', 'string'],
            'phone_work' => ['nullable', 'string'],
            'phone_home' => ['nullable', 'string'],
            'status' => ['integer'],
            'newpassword' => ['nullable', 'string', new Password, 'confirmed']
        ])->validate();

        if (!$employee->username) {
            $data['username'] = \Str::remove([' ', '_', '-'], strtolower(trim($data['firstname'])));
        }

        if ($request->filled('newpassword')) {
            $data['password'] = Hash::make($request->newpassword);
        };

        $employee->update($data);

        return response(['success' => 'Empleado actualizado.'], 200);
    }

    public function search(Request $request)
    {
        return User::query()
            ->when($request->level, function ($query) use ($request) {
                $query->where('level', $request->level);
            })
            ->where(function ($query) use ($request) {
                $query->where('firstname', 'like', "%{$request->search}%")
                    ->orWhere('lastname', 'like', "%{$request->search}%");
            })
            ->orderBy('firstname')
            ->get()
            ->map(function ($user) {
                return [
                'id' => $user->id,
                'uuid' => $user->uuid,
                'level' => $user->level,
                'firstname' => $user->firstname,
                'lastname' => $user->lastname,
                'fullname' => $user->fullname
                ];
            });
    }

    public function addAddress(User $user, Request $request)
    {
        $attributes = $request->validate([
            'address' => ['required', 'string', 'max:255'],
            'city' => ['required', 'string', 'max:255'],
            'state' => ['required', 'string', 'max:255'],
            'country' => ['required', 'string', 'max:255'],
            'zip' => ['required', 'string', 'max:255'],
            'status' => ['required', 'boolean'],
            'type' => ['required', 'string', 'max:255'],
            'referencias' => ['nullable', 'string'],
        ]);

        $user->addresses()->create($attributes);

        return $user->addresses;
    }
}
