<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTasksTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('tasks', function (Blueprint $table) {
            $table->id();
            $table->uuid('uuid');
            $table->string('title');
            $table->date('start_date')->nullable();
            $table->time('start_time')->nullable();
            $table->date('end_date')->nullable();
            $table->time('end_time')->nullable();
            $table->integer('priority')->default('2');
            $table->foreignUuid('assigned_to')->nullable();
            $table->foreignUuid('created_by')->nullable();
            $table->foreignUuid('contact_uuid')->nullable();
            $table->text('body')->nullable();
            $table->integer('state')->default(0);
            $table->integer('duration')->default(10);
            $table->boolean('notify')->default(0);
            $table->integer('minutes')->default(10);
            $table->date('notification_date')->nullable();
            $table->unsignedBigInteger('taskable_id')->nullable();
            $table->text('taskable_type')->nullable();
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
        Schema::dropIfExists('tasks');
    }
}
