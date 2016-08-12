<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateRarity extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('raritys',function(Blueprint $table){
            $table->increments('id_rarity');
            $table->string('value');
            $table->timestamps();
        });

        Schema::table('cards',function(Blueprint $table){
            $table->integer('id_rarity')->unsigned();
            $table->foreign('id_rarity')->references('id_rarity')->on('raritys')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('raritys');
    }
}
