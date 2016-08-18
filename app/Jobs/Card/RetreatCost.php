<?php

namespace App\Jobs\Card;

use App\Jobs\Job;
use App\Models\Cards;
use App\Models\Types;
use App\Models\RetreatCosts;
use Illuminate\Queue\SerializesModels;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;

class RetreatCost extends Job implements ShouldQueue
{
    use InteractsWithQueue, SerializesModels;
	protected $retreatCost;
	protected $card;
	
	/**
	 * Create a new job instance.
	 *
	 * @return void
	 */
	public function __construct(Cards $card,array $retreatCost)
	{
		$this->card = $card;
		$this->retreatCost = $retreatCost;
	}

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
	    $retreatCard = RetreatCosts::where('id_card','=',$this->card->id_card)->get();
	    
	    if(count($retreatCard) == count($this->retreatCost))
	    	return true;
	    	
	    foreach ($this->retreatCost as $retreatCost) {
	    	
	    	$new_type = Types::firstOrNew(['type'=>$retreatCost]);
		    
		    if($new_type->exists == false)
			    $new_type->save();
		    
		    RetreatCosts::where('id_card','=',$this->card->id_card)->delete();
		
		    RetreatCosts::create([
		    	'id_card' => $this->card->id_card,
			    'id_type' => $new_type->id_type
		    ]);
		    
	    }
    }
}
