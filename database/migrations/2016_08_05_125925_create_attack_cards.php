<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateAttackCards extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('attack_cards',function(Blueprint $table){
            $table->increments('id_attack_card');
            $table->integer('id_card')->unsigned();
            $table->foreign('id_card')->references('id_card')->on('cards')->onDelete('cascade');
            $table->integer('id_attack')->unsigend();
            $table->foreign('id_attack')->references('id_attack')->on('attacks')->onDelete('cascade');
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
        Schema::dropIfExists('attack_cards');
    }
}
