<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AlterUserColumn extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table("users",function(Blueprint $table){
            $table->dropColumn("id_contry");
            $table->string("country",50)->nullable();
            $table->string("city",50)->nullable();
            $table->string("complements",100)->nullable();
            $table->boolean("complet")->default(false);
            $table->boolean("complet_phone")->default(false);
            $table->boolean("complet_friends_email")->default(false);
            $table->boolean("complet_friend")->default(false);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table("users",function(Blueprint $table){
            $table->integer("id_contry")->nullable();
            $table->dropColumn("country");
            $table->dropColumn("city");
            $table->dropColumn("complements");
            $table->dropColumn("complet");
            $table->dropColumn("complet_phone");
            $table->dropColumn("complet_friends_email");
            $table->dropColumn("complet_friend");
        });
    }
}
