<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class Origin extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = ['id', 'uuid', 'name', 'note', 'status', 'branch_uuid', 'created_by'];

    protected static function boot()
    {
        parent::boot();

        static::creating(function ($model) {
            $model->uuid = (string) Str::uuid();
        });
    }

    public function creator()
    {
        return $this->belongsTo(User::class, 'created_by', 'uuid')
            ->select(['id', 'uuid', 'firstname', 'lastname']);
    }

    public function branch()
    {
        return $this->belongsTo(Branch::class, 'branch_uuid', 'uuid')
            ->select(['id', 'uuid', 'name', 'status']);
    }
}
