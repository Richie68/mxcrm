<?php

namespace App\Http\Controllers\Api;

use App\Models\Address;

class ApiAddressController
{
    public function destroy(Address $address)
    {
        $address->delete();

        return response(['message' => 'Exito'], 200);
    }
}
