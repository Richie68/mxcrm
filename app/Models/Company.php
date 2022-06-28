<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Str;

class Company extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = ['uuid', 'name', 'phone_work', 'phone_fax', 'website', 'description', 'assigned_to', 'type', 'industry', 'anual_revenue', 'amount_employees'];

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
            ->select(['id', 'uuid', 'firstname', 'lastname']);
    }

    public function emails()
    {
        return $this->morphMany(Email::class, 'emailable')
            ->select(['id', 'uuid', 'email', 'main', 'emailable_type', 'emailable_id']);
    }

    public function principal()
    {
        return $this->morphMany(Address::class, 'addressable')
                ->where('type', 'principal');
    }

    public function facturacion()
    {
        return $this->morphMany(Address::class, 'addressable')
                ->where('type', 'facturacion');
    }

    public function addresses()
    {
        return $this->morphMany(Address::class, 'addressable');
    }
}
