<?php

namespace App\Models;

use Illuminate\Support\Str;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Hotel extends Model
{
    use HasFactory, SoftDeletes;

    protected $primary_key = 'uuid';

    protected static function boot()
    {
        parent::boot();

        static::creating(function ($model) {
            $model->uuid = (string) Str::uuid();
        });
    }

    protected $fillable = ['uuid', 'name', 'description', 'user_id', 'created_by', 'status', 'branch_uuid'];

    public function assigned()
    {
        return $this->belongsTo(User::class, 'user_id', 'uuid');
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
