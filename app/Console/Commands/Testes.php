<?php

namespace App\Console\Commands;

use App\Http\Controllers\EmailController;
use App\Http\Controllers\UserController;
use App\Jobs\SendMail;
use App\Models\User;
use Illuminate\Console\Command;

class Testes extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'cmd:teste';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command description';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        $email = new EmailController(['lucas@gmail.com','lucasmessias.pg@outlook.com']);
        $email->message('teste')->send();
    }
}
