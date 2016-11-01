<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateCardAbility extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('abilitys',function(Blueprint $table){
            $table->increments('id_ability');
            $table->string('name');
            $table->integer('id_text')->unsigned();
            $table->integer('id_card')->unsigned();
            $table->timestamps();
        });

        Schema::table('abilitys',function(Blueprint $table){
           $table->foreign('id_text')->references('id_text')->on('texts')->onDelete('cascade');
           $table->foreign('id_card')->references('id_card')->on('cards')->onDelete('cascade');
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
