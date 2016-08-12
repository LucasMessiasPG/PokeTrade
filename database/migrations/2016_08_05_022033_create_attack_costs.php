<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateAttackCosts extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('attack_costs',function(Blueprint $table){
            $table->increments('id_attack_cost');
            $table->integer('id_attack')->unsigned();
            $table->integer('id_type')->unsigned();
            $table->timestamps();
        });

        Schema::table('attack_costs',function(Blueprint $table){
            $table->foreign('id_attack')->references('id_attack')->on('attacks')->onDelete('cascade');
            $table->foreign('id_type')->references('id_type')->on('types')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists(attack_costs);
    }
}
