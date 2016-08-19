<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateStatusMessagesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('status_messages', function (Blueprint $table) {
            $table->increments('id_status_message');
            $table->string('status');
            $table->timestamps();
        });
	    Schema::table('messages',function (Blueprint $table){
		    $table->foreign('id_status_message')->references('id_status_message')->on('status_messages')->onDelete('cascade');
	    });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('status_messages');
    }
}
