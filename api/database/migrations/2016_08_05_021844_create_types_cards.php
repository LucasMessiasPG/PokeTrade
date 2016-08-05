<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateTypesCards extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('types_cards',function(Blueprint $table){
            $table->increments('id_types_card');
            $table->integer('id_card')->unsigned();
            $table->integer('id_type')->unsigned();
            $table->timestamps();
        });

        Schema::table('types_cards',function(Blueprint $table){
            $table->foreign('id_card')->references('id_card')->on('cards');
            $table->foreign('id_type')->references('id_type')->on('types');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('types_cards');
    }
}
