<?php

namespace App\Http\Controllers\Api;

use App\Models\Branch;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Validator;

class ApiBranchController
{
    public function index()
    {
        return Branch::orderBy('name')->get();
    }

    public function store(Request $request)
    {
        $data = $request->all();

        Validator::make($data, [
            'name' => ['required', 'string', 'max:255'],
            'status' => ['required', 'boolean']
        ])->validate();

        if (Branch::create($data)) {
            return response(['success' => 'Se ha registeado el branch']);
        }

        return Redirect::route('branches.index');
    }

    public function destroy(Branch $branch)
    {
        $branch->delete();

        return response(['message' => 'Success']);
    }

    public function search(Request $request)
    {
        return Branch::query()
            ->where('status', 1)
            ->where('name', 'like', "%{$request->search}%")
            ->get()
            ->map(function ($category) {
                return [
                'id' => $category->id,
                'uuid' => $category->uuid,
                'name' => $category->name,
                'status' => $category->status,
                ];
            });
    }
}
