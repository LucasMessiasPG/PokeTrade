<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateStatusWantsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('status_wants', function (Blueprint $table) {
            $table->increments('id_status_want');
            $table->string('status',200);
            $table->timestamps();
        });
        Schema::table('wants',function (Blueprint $table){
            $table->foreign('id_status_want')->references('id_status_want')->on('status_wants')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('status_wants');
    }
}
