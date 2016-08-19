<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateMessagesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('messages', function (Blueprint $table) {
            $table->increments('id_message');
	        $table->text('text');
	        $table->integer('id_user')->unsigned();
	        $table->integer('id_user_from')->unsigned();
	        $table->foreign('id_user')->references('id_user')->on('users')->onDelete('cascade');
	        $table->foreign('id_user_from')->references('id_user')->on('users')->onDelete('cascade');
	        $table->integer('id_status_message')->unsigned();
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
        Schema::dropIfExists('messages');
    }
}
