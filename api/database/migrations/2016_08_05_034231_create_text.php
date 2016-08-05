<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateText extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('text',function(Blueprint $table){
            $table->increments('id_text');
            $table->string('text');
        });

        Schema::table('cards',function(Blueprint $table){
            $table->integer('id_text')->nullable()->unsinged();
            $table->string('hp')->nullable();
            $table->foreign('id_text')->references('id_text')->on('text');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
    }
}
