<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateRetreatCost extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('retreat_costs',function(Blueprint $table){
            $table->increments('id_retreat_cost');
            $table->integer('id_card')->unsigned();
            $table->integer('id_type')->unsigned();
            $table->timestamps();
        });

        Schema::table('retreat_costs',function(Blueprint $table){
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
        Schema::drop('retreat_costs');
    }
}
