<?php

namespace App\Models;

use Illuminate\Support\Str;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Supplier extends Model
{
    use HasFactory, SoftDeletes;

    protected static function boot()
    {
        parent::boot();

        static::creating(function ($model) {
            $model->uuid = (string) Str::uuid();
        });
    }

    protected $fillable = ['uuid', 'name', 'created_by', 'description', 'assigned_to', 'code', 'razon_social', 'rfc', 'phone_work', 'website', 'status'];


    /*** Relations ***/
    public function emails()
    {
        return $this->morphMany(Email::class, 'emailable')
            ->orderByDesc('main');
    }

    public function creator()
    {
        return $this->belongsTo(User::class, 'created_by', 'uuid')
            ->select(['uuid', 'firstname', 'lastname']);
    }

    public function assigned()
    {
        return $this->belongsTo(User::class, 'assigned_to', 'uuid')
            ->select(['uuid', 'firstname', 'lastname']);
    }

    public function addresses()
    {
        return $this->morphMany(Address::class, 'addressable');
    }
}
