<?php

namespace App\Models;

use Illuminate\Support\Str;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Address extends Model
{
    use HasFactory;

    protected $hidden = ['addressable_type', 'addressable_id'];

    protected $fillable = ['uuid', 'address', 'city', 'state', 'country', 'zip', 'status', 'type', 'referencias'];

    protected static function boot()
    {
        parent::boot();

        static::creating(function ($model) {
            $model->uuid = (string) Str::uuid();
        });
    }

    public function addressable()
    {
        return $this->morphTo();
    }
}
