<?php

namespace App\Policies;

use Illuminate\Auth\Access\HandlesAuthorization;
use App\Models\Origin;
use App\Models\User;

class OriginPolicy
{
    use HandlesAuthorization;

    public function create(User $user)
    {
        return $user->level < 4;
    }

    public function edit(User $user, Origin $model)
    {
        return $user->level < 4;
    }
}
