<?php

namespace App\Models;

use Illuminate\Support\Str;
use Laravel\Sanctum\HasApiTokens;
use Laravel\Jetstream\HasProfilePhoto;
use Illuminate\Notifications\Notifiable;
use Laravel\Fortify\TwoFactorAuthenticatable;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable
{
    use Notifiable;
    use HasFactory;
    use SoftDeletes;
    use HasApiTokens;
    use HasProfilePhoto;
    use TwoFactorAuthenticatable;

    protected $employeeStatus = [
        'Activa',
        'No labora',
        'Permiso de Ausencia'
    ];

    protected static function boot()
    {
        parent::boot();

        static::creating(function ($model) {
            $model->uuid = (string) Str::uuid();
        });
    }

    protected $fillable = [
        'uuid', 'firstname', 'lastname', 'username', 'email', 'password', 'title', 'department', 'phone_mobil', 'phone_home', 'phone_work', 'phone_other', 'notes', 'address', 'city', 'state', 'country', 'zip', 'status', 'level', 'receive_notifications', 'is_employee', 'employee_status', 'branch_id'
    ];

    protected $hidden = [
        'password',
        'remember_token',
        'two_factor_recovery_codes',
        'two_factor_secret',
    ];

    protected $casts = [
        'email_verified_at' => 'datetime',
        'receive_notifications' => 'boolean'
    ];

    protected $appends = [
        'profile_photo_url',
        'fullname',
    ];

    public function getEmployeeStatus($value)
    {
        return $this->employeeStatus[$value];
    }

    public function getFullnameAttribute()
    {
        return $this->firstname . ' ' . $this->lastname;
    }

    public function branch()
    {
        return $this->belongsTo(Branch::class)
            ->select(['id', 'uuid', 'name', 'status']);
    }

    public function emails()
    {
        return $this->morphMany(Email::class, 'emailable')
            ->orderByDesc('main');
    }

    public function mainEmail()
    {
        return $this->morphMany(Email::class, 'emailable')->where('main', 1);
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
