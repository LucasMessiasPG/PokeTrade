<?php

namespace App\Console\Commands\Messages;

use App\Jobs\AddMesssage;
use App\Models\User;
use Illuminate\Console\Command;

class Message extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'messages:message {--id_user=} {--message=}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Send a message to user from system';

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
    	try{
    	            
	        $id_user = $this->option('id_user');
	        $message = $this->option('message');
	        $user = User::findOrFail($id_user);
		    $this->info('Sending message to '.$user->name);
		    $this->info('Message: '.$message);
		    $job = new AddMesssage($user,$message,2);
		    dispatch($job);
		    $this->info('Envido');
    	}catch (\Exception $e){
    	    $this->warn($e->getMessage());
    	    $this->warn($e->getLine());
    	    $this->warn($e->getFile());
    	}
    }
}
