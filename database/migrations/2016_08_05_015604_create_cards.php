<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateCards extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {

        Schema::create('cards',function(Blueprint $table){
            $table->increments('id_card');
            $table->string('id');
            $table->string('name');
            $table->integer('national_pokedex_number')->nullable();
            $table->string('image_url');
            $table->string('subtype');
            $table->string('supertype');
            $table->string('hp')->nullable();
            $table->string('number');
            $table->integer('number_int')->nullable();
            $table->string('artist');
            $table->integer('id_set')->unsigned();
            $table->timestamps();
        });

        Schema::table('cards',function(Blueprint $table){
            $table->foreign('id_set')->references('id_set')->on('sets')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('cards');
    }
}
