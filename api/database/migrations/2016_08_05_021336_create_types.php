<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateTypes extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void2016_08_05_032801_alter_cards
     */
    public function up()
    {
        Schema::create('types',function(Blueprint $table){
            $table->increments('id_type');
            $table->string('type');
            $table->timestamps();
        });

        Schema::table('weaknesses',function(Blueprint $table){
            $table->integer('id_type')->unsigned();
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
        Schema::drop('types');
    }
}
