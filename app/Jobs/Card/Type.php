<?php

namespace App\Jobs\Card;

use App\Jobs\Job;
use App\Models\Cards;
use App\Models\Types;
use App\Models\TypesCards;
use Illuminate\Queue\SerializesModels;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;

class Type extends Job implements ShouldQueue
{
    use InteractsWithQueue, SerializesModels;
	protected $type;
	protected $card;
	
	/**
	 * Create a new job instance.
	 *
	 * @return void
	 */
	public function __construct(Cards $card,array $type)
	{
		$this->card = $card;
		$this->type = $type;
	}

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
    	TypesCards::where('id_card','=',$this->card->id_card)->delete();
	    
	    foreach ($this->type as $type) {
		
		    $new_type = Types::firstOrNew(['type' => $type]);
		
		    if ($new_type->exists == false)
			    $new_type->save();
		    
		    TypesCards::create([
		    	'id_card' => $this->card->id_card,
			    'id_type' => $new_type->id_type
		    ]);
	    }
    }
}
