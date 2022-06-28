<?php

namespace App\Policies;

use App\Models\Lead;
use App\Models\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class LeadPolicy
{
    use HandlesAuthorization;

    public function create(User $user)
    {
        return $user->level < 4;
    }

    public function edit(User $user, Lead $model)
    {
        return $user->level < 4;
    }
}
