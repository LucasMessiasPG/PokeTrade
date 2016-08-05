<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateAttacks extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('attacks',function(Blueprint $table){
            $table->increments('id_attack');
            $table->string('name');
            $table->string('text');
            $table->string('damage');
            $table->integer('converted_energy_cost');
            $table->integer('id_card')->unsigened();
            $table->timestamps();
        });

        Schema::table('attacks',function(Blueprint $table){
            $table->foreign('id_card')->references('id_card')->on('cards');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('attacks');
    }
}
