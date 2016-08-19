<?php

use Illuminate\Database\Seeder;
use \App\Models\StatusMessage as MStatusMessage;

class StatusMessage extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
	    MStatusMessage::firstOrCreate([
	    	'status' => 'Undefined'
	    ]);
	    MStatusMessage::firstOrCreate([
	    	'status' => 'Message'
	    ]);
	    MStatusMessage::firstOrCreate([
	    	'status' => 'System'
	    ]);
	    MStatusMessage::firstOrCreate([
	    	'status' => 'Trade'
	    ]);
	    MStatusMessage::firstOrCreate([
	    	'status' => 'Log'
	    ]);
	    MStatusMessage::firstOrCreate([
	    	'status' => 'Card'
	    ]);
    }
}
