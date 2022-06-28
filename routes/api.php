<?php

use App\Http\Controllers\Api\ApiSupplierController;
use App\Http\Controllers\Api\ApiRetailerController;
use App\Http\Controllers\Api\ApiEmployeeController;
use App\Http\Controllers\Api\ApiCategoryController;
use App\Http\Controllers\Api\ApiCompanyController;
use App\Http\Controllers\Api\ApiAddressController;
use App\Http\Controllers\Api\ApiContactController;
use App\Http\Controllers\Api\ApiProductController;
use App\Http\Controllers\Api\ApiAgencyController;
use App\Http\Controllers\Api\ApiBranchController;
use App\Http\Controllers\Api\ApiOriginController;
use App\Http\Controllers\Api\ApiEmailController;
use App\Http\Controllers\Api\ApiHotelController;
use App\Http\Controllers\Api\ApiGroupController;
use App\Http\Controllers\Api\ApiLeadController;
use App\Http\Controllers\Api\ApiTaskController;
use App\Http\Controllers\Api\ApiBgImages;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;

Route::apiResource('users', UserController::class);

Route::post('bg-images', ApiBgImages::class)->name('bg-current-image');

Route::post('add-email-to-crm-user/{user:uuid}', [UserController::class, 'addEmail'])
    ->name('add-email-to-crm-user');

// Branches
Route::apiResource('branchs', ApiBranchController::class)->scoped(['branches' => 'uuid']);

Route::post('search-branchs', [ApiBranchController::class, 'search'])
    ->name('api.search-branchs');

// Hotels
Route::apiResource('hotels', ApiHotelController::class)->scoped(['hotel' => 'uuid']);

Route::post('search-hotel', [ApiHotelController::class, 'search'])
    ->name('api.search-hotel');

// Origins
Route::apiResource('origins', ApiOriginController::class)->scoped(['origin' => 'uuid']);

Route::post('search-origins', [ApiOriginController::class, 'search'])
    ->name('api.search-origins');

// Agency
Route::apiResource('agencies', ApiAgencyController::class)->scoped(['agency' => 'uuid']);

Route::post('search-agency', [ApiAgencyController::class, 'search'])
    ->name('api.search-agency');

// Retailers
Route::apiResource('retailers', ApiRetailerController::class)->scoped(['retailer' => 'uuid']);

Route::post(
    'retailers/{retailer:uuid}/register-task/{task:uuid}',
    [ApiRetailerController::class, 'addTask']
)->name('api.retailer.add-task');

Route::delete('retailers/{retailer:uuid}/remove-task/{uuid}', [ApiRetailerController::class, 'destroyTask'])
    ->name('api.retailer.task-destroy');

// Category
Route::apiResource('categories', ApiCategoryController::class)->scoped(['category' => 'uuid']);

Route::post('search-categories', [ApiCategoryController::class, 'search'])
    ->name('api.search-categories');

Route::post('categories/remove/child/{category:uuid}', [ApiCategoryController::class, 'removeChild'])
    ->name('api.categories.remove-child');

// Employees
Route::apiResource('employees', ApiEmployeeController::class)->scoped(['user' => 'uuid']);

Route::post('search-employees', [ApiEmployeeController::class, 'search'])
    ->name('api.search-employees');

Route::post('register-address/user/{user:uuid}', [ApiEmployeeController::class, 'addAddress'])
    ->name('api.register-address-to-employee');

// Contacts
Route::apiResource('contacts', ApiContactController::class)
    ->scoped(['contact' => 'uuid']);

Route::post('contacts/convert/to-lead/{contact:uuid}', [ApiContactController::class, 'convert'])
    ->name('api.contacts.convert-to-lead');

Route::post(
    'contactos/{contact:uuid}/register-task/{task:uuid}',
    [ApiContactController::class, 'addTask']
)->name('api.contact.add-task');

Route::post('register-address/contacts/{contact:uuid}', [ApiContactController::class, 'addAddress'])
    ->name('api.register-address-to-contact');

Route::post('add-email-to-contact/{contact:uuid}', [ApiContactController::class, 'addEmail'])
    ->name('api.register-email-to-contact');

Route::post('search-contacts', [ApiContactController::class, 'search'])
    ->name('api.search-contacts');

// Tasks
Route::apiResource('tasks', ApiTaskController::class)->scoped(['task' => 'uuid']);

// Products
Route::apiResource('products', ApiProductController::class)->scoped(['product' => 'uuid']);

// Leads
Route::apiResource('leads', ApiLeadController::class)->scoped(['lead' => 'uuid']);

Route::post('register-address/leads/{lead:uuid}', [ApiLeadController::class, 'addAddress'])
    ->name('api.register-address-to-lead');

Route::post('add-email-to-lead/{lead:uuid}', [ApiLeadController::class, 'addEmail'])
    ->name('api.register-email-to-lead');

Route::post('search-leads', [ApiLeadController::class, 'search'])
    ->name('api.search-leads');

// Companies
Route::apiResource('companies', ApiCompanyController::class)->scoped(['company' => 'uuid']);

Route::post('add-email-to-crm-company/{company:uuid}', [ApiCompanyController::class, 'addEmail'])
    ->name('add-email-to-crm-company');

Route::post('register-address/company/{company:uuid}', [ApiCompanyController::class, 'addAddress'])
    ->name('api.register-address-to-company');

Route::post('search-company', [ApiCompanyController::class, 'search'])
    ->name('api.search-company');

// Suppliers
Route::apiResource('suppliers', ApiSupplierController::class)->scoped(['supplier' => 'uuid']);

Route::post('register-address/suppliers/{supplier:uuid}', [ApiSupplierController::class, 'addAddress'])
    ->name('api.register-address-to-supplier');

Route::post('add-email/suppliers/{supplier:uuid}', [ApiSupplierController::class, 'addEmail'])
    ->name('api.register-email-to-supplier');

Route::post('search-suppliers', [ApiSupplierController::class, 'search'])
    ->name('api.search-suppliers');

// Groups
Route::apiResource('groups', ApiGroupController::class)->scoped(['group' => 'uuid']);

// Addresses
Route::delete('remove-address/{address:uuid}', [ApiAddressController::class, 'destroy'])
    ->name('address-destroy');

// Emails
Route::delete('remove-email/{email:uuid}', [ApiEmailController::class, 'destroy'])
    ->name('remove-email');
