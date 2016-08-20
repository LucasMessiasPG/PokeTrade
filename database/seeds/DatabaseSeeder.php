<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
         $this->call(UserDefault::class);
         $this->call(StatusMessage::class);
    }
}

class UserDefault extends Seeder{
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
class StatusMessage extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        \App\Models\StatusMessage::firstOrCreate([
            'status' => 'Undefined'
        ]);
        \App\Models\StatusMessage::firstOrCreate([
            'status' => 'Message'
        ]);
        \App\Models\StatusMessage::firstOrCreate([
            'status' => 'System'
        ]);
        \App\Models\StatusMessage::firstOrCreate([
            'status' => 'Trade'
        ]);
        \App\Models\StatusMessage::firstOrCreate([
            'status' => 'Log'
        ]);
        \App\Models\StatusMessage::firstOrCreate([
            'status' => 'Card'
        ]);
    }
}
