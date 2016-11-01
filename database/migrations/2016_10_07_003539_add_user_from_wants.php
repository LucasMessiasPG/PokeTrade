<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddUserFromWants extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('wants',function(Blueprint $table){
            $table->integer('id_user_from')->nullable()->unsigned();
            $table->foreign('id_user_from')->references('id_user')->on('users')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('wants',function(Blueprint $table){
            $table->dropColumn('id_user_from');
        });
    }
}
