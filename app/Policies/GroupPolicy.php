<?php

namespace App\Policies;

use Illuminate\Auth\Access\HandlesAuthorization;
use App\Models\Group;
use App\Models\User;

class GroupPolicy
{
    use HandlesAuthorization;

    public function create(User $user)
    {
        return $user->level < 4;
    }

    public function edit(User $user, Group $model)
    {
        return $user->level < 4;
    }
}
