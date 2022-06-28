<?php

namespace App\Http\Controllers;

use App\Models\Company;
use Inertia\Inertia;
use Inertia\Response;

class CompanyController
{
    public function index() : Response
    {
        return Inertia::render('Company/Index');
    }

    public function create() : Response
    {
        return Inertia::render('Company/Create');
    }

    public function show(Company $company) : Response
    {
        return Inertia::render('Company/Show', [
            'thecompany' => $company->load('assigned', 'emails', 'addresses')
        ]);
    }
}
