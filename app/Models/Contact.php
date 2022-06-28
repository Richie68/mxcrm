<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Str;

class Contact extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = ['id', 'uuid', 'salutation', 'firstname', 'lastname', 'phone_work', 'phone_mobil', 'phone_fax', 'title', 'department', 'company', 'company_id', 'assigned_to', 'description', 'call', 'assistant', 'assistant_phone', 'source', 'status', 'created_by', 'lead_uuid', 'origin_uuid', 'branch_uuid'];

    protected static function boot()
    {
        parent::boot();

        static::creating(function ($model) {
            $model->uuid = (string) Str::uuid();
        });
    }

    protected $appends = [
        'fullname'
    ];

    protected $casts = ['call' => 'boolean'];

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

    public function creator()
    {
        return $this->belongsTo(User::class, 'created_by', 'uuid')
            ->select(['id', 'uuid', 'firstname', 'lastname', 'email']);
    }

    public function origin()
    {
        return $this->belongsTo(Origin::class, 'origin_uuid', 'uuid')
            ->select(['id', 'uuid', 'name', 'note', 'status']);
    }

    public function branch()
    {
        return $this->belongsTo(Branch::class, 'branch_uuid', 'uuid')
            ->select(['id', 'uuid', 'name', 'status']);
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

    public function tasks()
    {
        return $this->morphMany(Task::class, 'taskable');
    }
}
