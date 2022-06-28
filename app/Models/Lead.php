<?php

namespace App\Models;

use Illuminate\Support\Str;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Lead extends Model
{
    use HasFactory, SoftDeletes;

    protected static function boot()
    {
        parent::boot();

        static::creating(function ($model) {
            $model->uuid = (string) Str::uuid();
        });
    }

    protected $fillable = [
        'uuid', 'salutation', 'firstname', 'lastname', 'phone_work', 'phone_mobil', 'phone_fax', 'title', 'department', 'company', 'company_id', 'assigned_to', 'description', 'call', 'assistant', 'assistant_phone', 'converted', 'referred_by', 'source', 'source_description', 'status', 'status_description', 'website'
    ];

    protected $casts = [
        'call' => 'boolean'
    ];

    protected $appends = ['fullname'];

    public function getFullnameAttribute()
    {
        return $this->firstname . ' ' . $this->lastname;
    }

    public function assigned()
    {
        return $this->belongsTo(User::class, 'assigned_to', 'uuid')
            ->select(['id', 'uuid', 'firstname', 'lastname', 'email']);
    }

    public function empresa()
    {
        return $this->belongsTo(Company::class, 'company_id');
    }

    public function referred()
    {
        return $this->belongsTo(User::class, 'referred_by', 'uuid');
    }

    public function emails()
    {
        return $this->morphMany(Email::class, 'emailable')
            ->select(['id', 'uuid', 'email', 'main', 'emailable_id', 'emailable_type']);
    }

    public function addresses()
    {
        return $this->morphMany(Address::class, 'addressable');
    }

    public function contact()
    {
        return $this->hasOne(Contact::class, 'lead_uuid', 'uuid')
                ->select(['id', 'uuid', 'firstname', 'lastname', 'lead_uuid']);
    }
}
