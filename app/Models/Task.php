<?php

namespace App\Models;

use Illuminate\Support\Str;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Task extends Model
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
        'uuid', 'title', 'start_date', 'start_time', 'end_date', 'end_time', 'priority', 'assigned_to', 'created_by', 'contact_uuid', 'body', 'state', 'duration', 'minutes', 'notify', 'notification_date', 'taskable_id', 'taskable_type'
    ];

    protected $hidden = ['taskable_id', 'taskable_type'];

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

    public function taskable()
    {
        return $this->morphTo();
    }
}
