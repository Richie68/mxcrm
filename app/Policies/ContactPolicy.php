<?php

namespace App\Policies;

use Illuminate\Auth\Access\HandlesAuthorization;
use App\Models\Contact;
use App\Models\User;

class ContactPolicy
{
    use HandlesAuthorization;

    public function create(User $user)
    {
        return $user->level < 4;
    }

    public function edit(User $user, Contact $model)
    {
        return $user->level < 4;
    }
}
