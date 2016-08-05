<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AlterCards extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('cards',function(Blueprint $table){
            $table->integer('id_rarity')->unsigned();
            $table->foreign('id_rarity')->references('id_rarity')->on('raritys');
            $table->dropColumn('rarity');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {

    }
}
