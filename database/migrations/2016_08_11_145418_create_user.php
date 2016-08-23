<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateUser extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users',function(Blueprint $table){
	        $table->increments('id_user');
	        $table->string('login',30)->unique();
	        $table->string('email',150)->unique();
	        $table->bigInteger('pp')->default(0);
	        $table->integer('id_contry')->nullable()->unsigend();
            $table->string('address')->nullable();
            $table->string('number')->nullable();
            $table->string('district')->nullable();
            $table->string('state')->nullable();
            $table->string('tel')->nullable();
	        $table->string('password');
	        $table->boolean('tutorial')->default(false);
	        $table->string('remember_token')->nullable();
	        $table->integer('id_group_user')->default(1);
	        $table->timestamp('deleted_at')->nullable();
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
        Schema::dropIfExists('users');
    }
}
