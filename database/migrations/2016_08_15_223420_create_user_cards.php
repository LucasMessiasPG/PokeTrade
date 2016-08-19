<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateUserCards extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('user_cards',function(Blueprint $table){
            $table->increments('id_user_card');
            $table->integer('id_user')->unsigend();
            $table->integer('id_card')->unsigend();
            $table->boolean('foil')->default(false);
            $table->boolean('reverse_foil')->default(false);
            $table->bigInteger('price');
            $table->softDeletes();
            $table->timestamps();
	        $table->foreign('id_user')->references('id_user')->on('users')->onDelete('cascade');
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
        Schema::dropIfExists('user_cards');
    }
}
