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
        Schema::create('texts',function(Blueprint $table){
            $table->increments('id_text');
            $table->text('text');
            $table->timestamps();
        });

        Schema::table('cards',function(Blueprint $table){
            $table->integer('id_text')->nullable()->unsinged();
            $table->foreign('id_text')->references('id_text')->on('texts')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('texts');
    }
}
