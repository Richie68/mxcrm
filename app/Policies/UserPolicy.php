<?php

namespace App\Policies;

use App\Models\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class UserPolicy
{
    use HandlesAuthorization;

    public function create(User $user)
    {
        return $user->level < 2;
    }

    public function update(User $user, User $model)
    {
        return $user->level <= $model->level;
    }
}
