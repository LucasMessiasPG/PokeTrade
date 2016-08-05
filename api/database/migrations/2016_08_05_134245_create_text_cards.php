<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateTextCards extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('text_cards',function(Blueprint $table){
            $table->increments('id_text_card');
            $table->integer('id_card')->unsigned();
            $table->foreign('id_card')->references('id_card')->on('cards')->onDelete('cascade');
            $table->integer('id_text')->unsigned();
            $table->foreign('id_text')->references('id_text')->on('texts')->onDelete('cascade');
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
        Schema::dropIfExists('text_cards');
    }
}
