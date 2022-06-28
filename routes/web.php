<?php

use App\Http\Controllers\EmployeeController;
use App\Http\Controllers\RetailerController;
use App\Http\Controllers\SupplierController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\CompanyController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\OriginController;
use App\Http\Controllers\AgencyController;
use App\Http\Controllers\BranchController;
use App\Http\Controllers\AdminController;
use App\Http\Controllers\GroupController;
use App\Http\Controllers\HotelController;
use App\Http\Controllers\LeadController;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return redirect(route('dashboard'));
});

Route::middleware(['auth:sanctum', 'verified'])->prefix('dashboard')->group(function () {
    Route::get('/', AdminController::class)->name('dashboard');

    Route::prefix('clientes')->name('clientes.')->group(function () {
        // Contactos
        Route::get('/contactos', [ContactController::class, 'index'])
        ->name('contacts.index');

        Route::get('/contactos/create', [ContactController::class, 'create'])
            ->name('contacts.create');

        Route::get('/contactos/{contact:uuid}', [ContactController::class, 'show'])
            ->name('contacts.show');

        // Agencias
        Route::get('/agencias', [AgencyController::class, 'index'])
            ->name('agencies.index');

        Route::get('/agencias/create', [AgencyController::class, 'create'])
            ->name('agencies.create');

        Route::get('/agencias/{agency:uuid}', [AgencyController::class, 'show'])
            ->name('agencies.show');

        // Hotels
        Route::get('/hotels', HotelController::class)
            ->name('hotels.index');

        // Comisionistas
        Route::get('/comisionistas', [RetailerController::class, 'index'])
            ->name('retailers.index');

        Route::get('/retailers/create', [RetailerController::class, 'create'])
            ->name('retailers.create');

        Route::get('/retailers/{retailer:uuid}', [RetailerController::class, 'show'])
            ->name('retailers.show');
    });

    Route::prefix('ventas')->name('ventas.')->group(function () {
        // Leads
        Route::get('/leads', [LeadController::class, 'index'])
            ->name('leads.index');

        Route::get('/leads/create', [LeadController::class, 'create'])
            ->name('leads.create');

        Route::get('/leads/{lead:uuid}', [LeadController::class, 'show'])
            ->name('leads.show');

        // Grupos
        Route::get('/grupos', [GroupController::class, 'index'])
            ->name('groups.index');

        Route::get('/grupos/create', [GroupController::class, 'create'])
            ->name('groups.create');

        Route::get('/grupos/{lead:uuid}', [GroupController::class, 'show'])
            ->name('groups.show');
    });

    Route::prefix('marketing')->name('marketing.')->group(function () {
        Route::get('/empresas', [CompanyController::class, 'index'])
            ->name('company.index');

        Route::get('/empresas/create', [CompanyController::class, 'create'])
            ->name('company.create');

        Route::get('/empresas/{company:uuid}', [CompanyController::class, 'show'])
            ->name('company.show');
    });

    Route::prefix('soporte')->name('soporte.')->group(function () {
        Route::get('/branchs', BranchController::class)
            ->name('branchs.index');

        Route::get('/origenes', OriginController::class)
            ->name('origins.index');

        Route::get('/productos', [ProductController::class, 'index'])
            ->name('products.index');

        Route::get('/productos/create', [ProductController::class, 'create'])
            ->name('products.create');

        Route::get('/productos/{product:uuid}', [ProductController::class, 'show'])
            ->name('products.show');
    });

    Route::prefix('catalogos')->name('catalogos.')->group(function () {
        // Proveedores
        Route::get('/proveedores', [SupplierController::class, 'index'])
            ->name('suppliers.index');

        Route::get('/proveedores/create', [SupplierController::class, 'create'])
            ->name('suppliers.create');

        Route::get('/proveedores/{supplier:uuid}', [SupplierController::class, 'show'])
            ->name('suppliers.show');

        // Categories
        Route::get('/categories', [CategoryController::class, 'index'])
            ->name('categories.index');

        Route::get('/categories/create', [CategoryController::class, 'create'])
            ->name('categories.create');

        Route::get('/categories/{supplier:uuid}', [CategoryController::class, 'show'])
            ->name('categories.show');
    });

    Route::prefix('empleados')->name('empleados.')->group(function () {
        Route::get('/', [EmployeeController::class, 'index'])
            ->name('index');

        Route::get('/create', [EmployeeController::class, 'create'])
            ->name('create');


        Route::get('/{user:uuid}', [EmployeeController::class, 'show'])
            ->name('show');
    });
});
