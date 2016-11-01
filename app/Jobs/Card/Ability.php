<?php

namespace App\Jobs\Card;

use App\Jobs\Job;
use App\Models\Abilitys;
use App\Models\Cards;
use App\Models\Texts;
use Illuminate\Queue\SerializesModels;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;

class Ability extends Job implements ShouldQueue
{
    use InteractsWithQueue, SerializesModels;
	protected $ability;
	protected $card;
	
	/**
     * Create a new job instance.
     *
     * @return void
     */
    public function __construct(Cards $card,$ability)
    {
        $this->card = $card;
	    $this->ability = $ability;
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
    	$new_text = Texts::firstOrCreate([
    		'text' => $this->ability->text,
	    ]);
    	
	    if($new_text->exists == false)
		    $new_text->save();
	    
	    $new_ability = Abilitys::firstOrCreate([
	        'name' => $this->ability->name,
		    'id_text' => $new_text->id_text,
		    'id_card' => $this->card->id_card
	    ]);
	    
	    if($new_ability->exists == false)
		    $new_ability->save();
    }
}
