<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class Group extends Model
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
        'uuid', 'folio', 'name', 'department', 'notes', 'type', 'hotel', 'pax', 'status', 'source', 'start_date', 'end_date', 'source_location', 'estimated_activities', 'estimated_transportation', 'estimated_events', 'currency', 'company_uuid', 'agency_uuid', 'created_by', 'assigned_to', 'manager_uuid', 'executive_uuid', 'executive_additional', 'contact_uuid', 'lead_uuid', 'campaign_uuid'
    ];

    protected $dates = ['start_date', 'end_date'];

    // Relations
    public function company()
    {
        return $this->belongsTo(Company::class, 'company_uuid', 'uuid');
    }

    public function agency()
    {
        return $this->belongsTo(Agency::class, 'agency_uuid', 'uuid');
    }

    public function creator()
    {
        return $this->belongsTo(User::class, 'created_by', 'uuid');
    }

    public function assigned()
    {
        return $this->belongsTo(User::class, 'assigned_to', 'uuid');
    }

    public function manager()
    {
        return $this->belongsTo(User::class, 'manager_uuid', 'uuid');
    }

    public function executive()
    {
        return $this->belongsTo(User::class, 'executive_uuid', 'uuid');
    }

    public function executiveAdditional()
    {
        return $this->belongsTo(User::class, 'executive_aditional', 'uuid');
    }

    public function contact()
    {
        return $this->belongsTo(Contact::class, 'contact_uuid', 'uuid');
    }

    public function lead()
    {
        return $this->belongsTo(Lead::class, 'lead_uuid', 'uuid');
    }

    public function campaign()
    {
        return $this->belongsTo(Lead::class, 'campaign_uuid', 'uuid');
    }

    public function hotels()
    {
        return $this->belongsToMany(Hotel::class);
    }
}
