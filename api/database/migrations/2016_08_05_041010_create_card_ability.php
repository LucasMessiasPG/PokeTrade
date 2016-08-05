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
            $table->timestamps();
        });

        Schema::table('abilitys',function(Blueprint $table){
           $table->foreign('id_text')->references('id_text')->on('text');
        });
        Schema::table('cards',function(Blueprint $table){
           $table->integer('id_ability')->nullable()->unsigned();
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
