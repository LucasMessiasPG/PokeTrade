<?php

namespace App\Jobs\Card;

use App\Jobs\Job;
use App\Models\Cards;
use App\Models\Types;
use App\Models\Weaknesses as MWeaknesses;
use Illuminate\Queue\SerializesModels;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;

class Weaknesses extends Job implements ShouldQueue
{
	use InteractsWithQueue, SerializesModels;
	protected $weaknesses;
	protected $card;
	
	/**
	 * Create a new job instance.
	 *
	 * @return void
	 */
	public function __construct(Cards $card, array $weaknesses)
	{
		$this->card = $card;
		$this->weaknesses = $weaknesses;
	}
	
	/**
	 * Execute the job.
	 *
	 * @return void
	 */
	public function handle()
	{
		MWeaknesses::where('id_card','=',$this->card->id_card)->delete();
		
		foreach ($this->weaknesses as $weaknesses) {
			
			$new_type = Types::firstOrNew(['type' => $weaknesses->type]);
			
			if ($new_type->exists == false)
				$new_type->save();
			
			
			MWeaknesses::create([
				'id_card' => $this->card->id_card,
				'value' => $weaknesses->value,
				'id_type' => $new_type->id_type
			]);
		}
	}
}
