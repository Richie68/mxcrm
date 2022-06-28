<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateGroupsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('groups', function (Blueprint $table) {
            $table->id();
            $table->uuid('uuid');
            $table->uuid('folio');
            $table->string('name');
            $table->string('department')->nullable();
            $table->text('notes')->nullable();
            $table->string('type');
            $table->string('hotel');
            $table->integer('pax')->default(0);
            $table->string('status');
            $table->string('source');
            $table->date('start_date')->nullable();
            $table->date('end_date')->nullable();
            $table->string('source_location')->nullable();
            $table->integer('estimated_activities')->default(0);
            $table->integer('estimated_transportation')->default(0);
            $table->integer('estimated_events')->default(0);
            $table->string('currency')->default('usd');
            $table->foreignUuid('company_uuid');
            $table->foreignUuid('agency_uuid');
            $table->foreignUuid('created_by');
            $table->foreignUuid('assigned_to')->nullable();
            $table->foreignUuid('manager_uuid')->nullable();
            $table->foreignUuid('executive_uuid')->nullable();
            $table->foreignUuid('executive_aditional')->nullable();
            $table->foreignUuid('lead_uuid')->nullable();
            $table->foreignUuid('contact_uuid')->nullable();
            $table->foreignUuid('campaign_uuid')->nullable();
            $table->softDeletes();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('groups');
    }
}
