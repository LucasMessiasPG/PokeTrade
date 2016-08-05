<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateSets extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('sets',function(Blueprint $table){
            $table->increments('id_set');
            $table->string('code');
            $table->string('name');
            $table->string('series');
            $table->integer('total_cards');
            $table->boolean('standard_legal');
            $table->timestamp('release_date');
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
        Schema::drop('sets');
    }
}
