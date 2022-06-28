<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use App\Http\Resources\UserResource;
use App\Models\Email;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;
use Illuminate\Support\Collection;
use Inertia\Response;

class UserController extends Controller
{
    public function index() : AnonymousResourceCollection
    {
        return UserResource::collection(User::all());
    }

    public function addEmail(User $user, Request $request)
    {
        if ($request->main) {
            $mainEmail = $user->emails()->where('main', 1)->first();

            if ($mainEmail) {
                $mainEmail->update(['main' => 0]);
            }
        }

        $user->emails()->create([
            'email' => $request->email,
            'main' => $request->main
        ]);

        return $user->load('emails');
    }

    public function removeEmail(User $user, Email $email) : User
    {
        $email->delete();

        return $user->load('emails');
    }
}
