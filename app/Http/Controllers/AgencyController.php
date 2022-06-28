<?php

namespace App\Http\Controllers;

use App\Models\Agency;
use Inertia\Inertia;
use Inertia\Response;

class AgencyController
{
    public function index() : Response
    {
        return Inertia::render('Agency/Index');
    }

    public function create() : Response
    {
        return Inertia::render('Agency/Create');
    }

    public function show(Agency $agency) : Response
    {
        return Inertia::render('Agency/Show', [
            'theagency' => $agency
        ]);
    }
}
