<?php

namespace App\Policies;

use Illuminate\Auth\Access\HandlesAuthorization;
use App\Models\Retailer;
use App\Models\User;

class RetailerPolicy
{
    use HandlesAuthorization;

    public function create(User $user)
    {
        return $user->level < 4;
    }

    public function edit(User $user, Retailer $model)
    {
        return $user->level < 4;
    }
}
