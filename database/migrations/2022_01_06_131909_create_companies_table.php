<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCompaniesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('companies', function (Blueprint $table) {
            $table->id();
            $table->uuid('uuid');
            $table->string('name');
            $table->string('phone_work')->nullable();
            $table->string('phone_fax')->nullable();
            $table->string('website')->nullable();
            $table->text('description')->nullable();
            $table->foreignUuid('assigned_to')->nullable();
            $table->string('type')->default('Directo');
            $table->string('industry')->nullable();
            $table->string('anual_revenue')->nullable();
            $table->string('amount_employees')->nullable();
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
        Schema::dropIfExists('companies');
    }
}
