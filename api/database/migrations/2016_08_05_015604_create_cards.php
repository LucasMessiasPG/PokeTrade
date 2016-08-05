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
            $table->string('name');
            $table->integer('national_pokedex_number');
            $table->string('image_url');
            $table->string('subtype');
            $table->string('supertype');
            $table->string('hp');
            $table->string('number');
            $table->string('artist');
            $table->string('rarity');
            $table->integer('id_set')->unsigned();
            $table->timestamps();
        });

        Schema::table('cards',function(Blueprint $table){
            $table->foreign('id_set')->references('id_set')->on('sets');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('cards');
    }
}
