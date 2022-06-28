<?php

namespace App\Http\Controllers\Api;

use App\Models\Email;
use Illuminate\Http\Request;

class ApiEmailController
{
    public function destroy(Email $email)
    {
        $email->delete();

        return response(['message' => 'Email deleted']);
    }
}
