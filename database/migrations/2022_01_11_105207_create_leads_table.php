<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateLeadsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('leads', function (Blueprint $table) {
            $table->id();
            $table->uuid('uuid');
            $table->string('salutation')->nullable();
            $table->string('firstname')->nullable();
            $table->string('lastname')->nullable();
            $table->string('phone_work')->nullable();
            $table->string('phone_mobil')->nullable();
            $table->string('phone_fax')->nullable();
            $table->string('title')->nullable();
            $table->string('department')->nullable();
            $table->string('company')->nullable();
            $table->string('company_id')->nullable();
            $table->foreignUuid('assigned_to')->nullable();
            $table->text('description')->nullable();
            $table->boolean('call')->default(1);
            $table->string('assistant')->nullable();
            $table->string('assistant_phone')->nullable();
            $table->boolean('converted')->default(0);
            $table->foreignUuid('referred_by')->nullable();
            $table->string('source')->nullable();
            $table->text('source_description')->nullable();
            $table->enum('status', ['nuevo', 'convertido', 'asignado'])->default('nuevo');
            $table->text('status_description')->nullable();
            $table->string('website')->nullable();
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
        Schema::dropIfExists('leads');
    }
}
