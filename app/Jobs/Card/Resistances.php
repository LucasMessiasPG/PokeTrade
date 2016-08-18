<?php

namespace App\Jobs\Card;

use App\Jobs\Job;
use App\Models\Resistances as MResistances;
use App\Models\Types;
use Illuminate\Queue\SerializesModels;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;

class Resistances extends Job implements ShouldQueue
{
    use InteractsWithQueue, SerializesModels;
	protected $resistences;
	protected $card;
	
	/**
	 * Create a new job instance.
	 *
	 * @return void
	 */
	public function __construct(Cards $card,array $resistences)
	{
		$this->card = $card;
		$this->resistences = $resistences;
	}

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
	    MResistances::where('id_card','=',$this->card->id_card)->delete();
	
	    foreach ($this->resistences as $resistences) {
		
		    $new_type = Types::firstOrNew(['type' => $resistences->type]);
		
		    if ($new_type->exists == false)
			    $new_type->save();
		
		
		    MResistances::create([
			    'id_card' => $this->card->id_card,
			    'value' => $resistences->value,
			    'id_type' => $new_type->id_type
		    ]);
	    }
    }
}
