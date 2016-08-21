<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateWantsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('wants', function (Blueprint $table) {
            $table->increments('id_want');
            $table->integer('id_user')->unsigned();
            $table->foreign('id_user')->references('id_user')->on('users')->onDelete('cascade');
            $table->integer('id_card')->unsigned();
            $table->foreign('id_card')->references('id_card')->on('cards')->onDelete('cascade');
            $table->boolean('foil')->default(false);
            $table->boolean('reverse_foil')->default(false);
            $table->bigInteger('pp');
            $table->integer('id_status_want');
            $table->softDeletes();
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
        Schema::drop('wants');
    }
}
