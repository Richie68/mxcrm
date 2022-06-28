<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProductsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->uuid('uuid');
            $table->string('name');
            $table->foreignUuid('created_by')->null();
            $table->foreignUuid('assigned_to')->null();
            $table->string('code')->nullable();
            $table->foreignUuid('category_uuid')->nullable();
            $table->foreignUuid('supplier_uuid')->nullable();
            $table->enum('type', ['Service', 'Good', 'Other'])->default('Good');
            $table->enum('currency', ['usd', 'mxn', 'cad', 'eur'])->default('usd');
            $table->integer('cost')->default(0);
            $table->integer('price')->default(0);
            $table->text('description')->nullable();
            $table->text('description_es')->nullable();
            $table->boolean('status')->default(1);
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
        Schema::dropIfExists('products');
    }
}
