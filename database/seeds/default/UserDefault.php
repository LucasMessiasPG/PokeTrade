<?php

use Illuminate\Database\Seeder;

class UserDefault extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
	    \App\Models\User::firstOrCreate([
		    'login'=>'System',
		    'email'=>'admin@naotememail.com',
		    'password' => \Illuminate\Support\Facades\Hash::make(env('SENHA_ADMIN')),
		    'tutorial' => true,
		    'id_group_user' => 1
	    ]);
    }
}
