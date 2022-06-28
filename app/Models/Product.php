<?php

namespace App\Models;

use Illuminate\Support\Str;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Product extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'id', 'uuid', 'name', 'created_by', 'assigned_to', 'code', 'category_uuid', 'supplier_uuid', 'type', 'curreny', 'cost', 'price', 'description', 'description_es', 'status'
    ];

    protected static function boot()
    {
        parent::boot();

        static::creating(function ($model) {
            $model->uuid = (string) Str::uuid();
        });
    }

    public function assigned()
    {
        return $this->belongsTo(User::class, 'assigned_to', 'uuid')
            ->select(['id', 'uuid', 'firstname', 'lastname', 'email', 'status']);
    }

    public function creator()
    {
        return $this->belongsTo(User::class, 'created_by', 'uuid')
            ->select(['id', 'uuid', 'firstname', 'lastname', 'email', 'status']);
    }

    public function category()
    {
        return $this->belongsTo(Category::class, 'category_uuid', 'uuid')
            ->select(['id', 'uuid', 'name', 'status']);
    }

    public function supplier()
    {
        return $this->belongsTo(Supplier::class, 'supplier_uuid', 'uuid')
            ->select(['id', 'uuid', 'name', 'code', 'status']);
    }
}
