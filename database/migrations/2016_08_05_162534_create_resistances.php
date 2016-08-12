<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateResistances extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('resistances',function(Blueprint $table){
            $table->increments('id_resistance');
            $table->integer('id_type')->unsigned();
            $table->foreign('id_type')->references('id_type')->on('types')->onDelete('cascade');
            $table->integer('id_card')->unsigned();
            $table->foreign('id_card')->references('id_card')->on('cards')->onDelete('cascade');
            $table->string('value');
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
        Schema::dropIfExists('resistances');
    }
}
