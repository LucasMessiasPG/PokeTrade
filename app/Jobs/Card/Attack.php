<?php

namespace App\Jobs\Card;

use App\Jobs\Job;
use App\Models\AttackCards;
use App\Models\AttackCosts;
use App\Models\Attacks;
use App\Models\Cards;
use App\Models\Types;
use Illuminate\Queue\SerializesModels;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;

class Attack extends Job implements ShouldQueue
{
    use InteractsWithQueue, SerializesModels;
	protected $attack;
	protected $card;
	
	/**
	 * Create a new job instance.
	 *
	 * @return void
	 */
	public function __construct(Cards $card,array $attack)
	{
		$this->card = $card;
		$this->attack = $attack;
	}
	
	/**
	 * Execute the job.
	 *
	 * @return void
	 */
	public function handle()
	{
		foreach ($this->attack as $attack) {
			$new_attack = Attacks::firstOrCreate([
				'name' => $attack->name,
				'text' => $attack->text,
				'damage' => $attack->damage,
				'converted_energy_cost' => $attack->convertedEnergyCost,
			]);
			if($new_attack->exists == false)
				$new_attack->save();

			$new_attack_card = AttackCards::firstOrCreate([
				'id_card' => $this->card->id_card,
				'id_attack' => $new_attack->id_attack,
			]);

			if($new_attack_card->exists == false)
				$new_attack_card->save();

			AttackCosts::where('id_attack','=',$new_attack->id_attack)->delete();

			foreach ($attack->cost as $cost) {
				$new_type = Types::firstOrCreate(['type' => $cost]);

				if ($new_type->exists == false)
					$new_type->save();

				$new_attack_cost = AttackCosts::create([
					'id_type' => $new_type->id_type,
					'id_attack' => $new_attack->id_attack
				]);

				if($new_attack_cost->exists == false)
					$new_attack_cost->save();

			}


		}
	}
}
