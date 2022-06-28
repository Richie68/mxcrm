<?php

namespace App\Models;

use Illuminate\Support\Str;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Category extends Model
{
    use HasFactory, SoftDeletes;

    protected static function boot()
    {
        parent::boot();

        static::creating(function ($model) {
            $model->uuid = (string) Str::uuid();
        });
    }

    protected $fillable = ['id', 'uuid', 'name', 'created_by', 'assigned_to', 'is_parent', 'parent_uuid', 'description', 'status'];

    protected $casts = [
        'status' => 'boolean',
        'is_parent' => 'boolean'
    ];

    protected $parentColumn = 'parent_uuid';

    public function assigned()
    {
        return $this->belongsTo(User::class, 'assigned_to', 'uuid')
            ->select(['id', 'uuid', 'firstname', 'lastname', 'email']);
    }

    public function creator()
    {
        return $this->belongsTo(User::class, 'created_by', 'uuid')
            ->select('id', 'uuid', 'firstname', 'lastname', 'email');
    }

    public function parent()
    {
        return $this->belongsTo(Category::class, $this->parentColumn, 'uuid')
            ->select('id', 'uuid', 'name', 'parent_uuid', 'updated_at', 'status');
    }

    public function children()
    {
        return $this->hasMany(Category::class, $this->parentColumn, 'uuid')
            ->orderBy('name')
            ->select('id', 'uuid', 'name', 'parent_uuid', 'updated_at', 'status');
    }

    public function allChildren()
    {
        return $this->children()->with('allChildren');
    }

    public function products()
    {
        return $this->hasMany(Product::class, 'category_uuid', 'uuid')
                ->select(['id', 'uuid', 'category_uuid', 'code', 'name', 'status']);
    }
}
