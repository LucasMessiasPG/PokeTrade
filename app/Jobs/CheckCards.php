<?php

namespace App\Jobs;

use App\Jobs\Card\Ability;
use App\Jobs\Card\Attack;
use App\Jobs\Card\Resistances;
use App\Jobs\Card\RetreatCost;
use App\Jobs\Card\Text;
use App\Jobs\Card\Type;
use App\Jobs\Card\Weaknesses;
use App\Jobs\Job;
use App\Models\AttackCosts;
use App\Models\Attacks;
use App\Models\AttacksCosts;
use App\Models\AttackCards;
use App\Models\Cards;
use App\Models\LogSistema;
use App\Models\Raritys;
use App\Models\Sets;
use App\Models\Texts;
use App\Models\Types;
use App\Models\TypesCards;
use Illuminate\Queue\SerializesModels;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;

class CheckCards extends Job implements ShouldQueue
{
	use InteractsWithQueue, SerializesModels;
	private $set;
	
	/**
	 * Create a new job instance.
	 *
	 * @return void
	 */
	public function __construct()
	{
		
	}
	
	/**
	 * Execute the job.
	 *
	 * @return void
	 */
	public function handle()
	{
		$page = 50;
		$stop = false;
		while ($stop == false) {
			echo "Page " . $page . "\r\n";
			LogSistema::create([
				'descricao' => 'Checando page: ' . $page
			]);
//        $ch = curl_init("http://api.pokemontcg.io/v1/cards?name=bellossom&setCode=xy7");
			$ch = curl_init("https://api.pokemontcg.io/v1/cards?page=" . $page);
			curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
			$result = curl_exec($ch);
			curl_close($ch);
			$api = json_decode($result);
			
			if (count($api->cards) == 0) {
				$stop = true;
				return true;
			}

//        if (count($api->cards) == $this->set->cards->count()) {
//            LogSistema::create([
//                'descricao' => 'set: ' . $this->set->name.' id_set: '.$this->set->id_set.' sem alteracao'
//            ]);
//            return true;
//        }
			
			foreach ($api->cards as $card_item) {
				
				$rarity = Raritys::firstOrCreate(['value' => $card_item->rarity]);
				if ($rarity->exists == false)
					$rarity->save();
				
				$sets = Sets::where('code', '=', $card_item->setCode)->first();

				$new_card = Cards::firstOrCreate([
					'id' => $card_item->id,
					'name' => $card_item->name,
					'national_pokedex_number' => (isset($card_item->nationalPokedexNumber))?$card_item->nationalPokedexNumber:null,
					'image_url' => $card_item->imageUrl,
					'subtype' => $card_item->subtype,
					'supertype' => (isset($card_item->supertype))?$card_item->supertype:'',
					'hp' => (isset($card_item->hp))?$card_item->hp:'',
					'number' => $card_item->number,
					'artist' => $card_item->artist,
					'id_set' => $sets->id_set,
					'id_rarity' => $rarity->id_rarity,
				]);
				
				
				if (isset($card_item->ability) && count($card_item->ability) > 0)
					dispatch(new Ability($new_card, $card_item->ability));
				
				if (isset($card_item->attacks) && count($card_item->attacks) > 0)
					dispatch(new Attack($new_card, $card_item->attacks));
				
				if (isset($card_item->types) && count($card_item->types) > 0)
					dispatch(new Type($new_card, $card_item->types));
				
				if (isset($card_item->retreatCost) && count($card_item->retreatCost) > 0)
					dispatch(new RetreatCost($new_card, $card_item->retreatCost));
				
				if (isset($card_item->weaknesses) && count($card_item->weaknesses) > 0)
					dispatch(new Weaknesses($new_card, $card_item->weaknesses));
				
				if (isset($card_item->resistances) && count($card_item->resistances) > 0)
					dispatch(new Resistances($new_card, $card_item->resistances));

				if (isset($card_item->text) && count($card_item->text) > 0)
					dispatch(new Text($new_card, $card_item->text));


				
			}
		
			LogSistema::create([
				'descricao' => 'Finalizado page : ' . $page
			]);
			$page++;
		}
	}
}

/*
 *
 *
 * 	dd('fim');
			
			
			foreach ($api->cards as $card_item) {
				$card = [];
				foreach ($card_item as $field => $item) {
					
					if (in_array($field, ['setCode', 'set', 'series'])) {
						continue;
					}
					
					if ($field == 'rarity') {
						$new_rarity = Raritys::firstOrNew(['value' => $item]);
						if ($new_rarity->exsits == false)
							$new_rarity->save();
						
						$new_card['id_rarity'] = $new_rarity->id_rarity;
						continue;
					}
					
					if ($field == 'retreatCost') {
						$array_types = [];
						foreach ($item as $type) {
							$new_types = Types::firstOrCreate(['type' => $type]);
							if ($new_types->exists == false)
								$new_types->save();
							
							$array_types[] = ['id_type' => $new_types->id_type];
						}
						
						$card[] = [
							'model' => 'RetreatCosts',
							'values' => $array_types
						];
						continue;
					}
					
					if ($field == 'types') {
						$array_types = [];
						foreach ($item as $type) {
							$new_types = Types::firstOrCreate(['type' => $type]);
							if ($new_types->exists == false)
								$new_types->save();
							
							$array_types[] = ['id_type' => $new_types->id_type];
						}
						$card[] = [
							'model' => 'Types',
							'values' => $array_types
						];
						continue;
					}
					
					if ($field == 'attacks') {
						$all_attack_pokemon = [];
						$array_attack = [];
						foreach ($item as $attack_item) {
							foreach ($attack_item as $field_attack => $attack) {
								if ($field_attack == 'cost') {
									$cost_attack = [];
									foreach ($attack as $type_attack) {
										$new_types = Types::firstOrNew(['type' => $type_attack]);
										if ($new_types->exists == false)
											$new_types->save();
										
										$cost_attack[] = $new_types->id_type;
									}
									$new_attack2['cost'] = $cost_attack;
									continue;
								}
								$new_attack2['att'][snake_case($field_attack)] = $attack;
								
							}
							
							$all_attack_pokemon[] = $new_attack2;
						}
						
						foreach ($all_attack_pokemon as $single_attack_pokemon) {
							$new_attack = Attacks::firstOrNew($single_attack_pokemon['att']);
							if ($new_attack->exists == false)
								$new_attack->save();
							
							foreach ($single_attack_pokemon['cost'] as $cost) {
								$new_attack_cost = AttackCosts::create([
									'id_attack' => $new_attack->id_attack,
									'id_type' => $cost
								]);
								if ($new_attack_cost->exists == false)
									$new_attack_cost->save();
								
							}
							$array_attack[] = ['id_attack' => $new_attack->id_attack];
						}
						$card[] = [
							'model' => 'Attacks',
							'values' => $array_attack
						];
						continue;
					}
					
					if ($field == 'ability') {
						$array_abailitys = [];
						$new_text = Texts::firstOrNew(['text' => $item->text]);
						if ($new_text->existis == false)
							$new_text->save();
						
						$array_abailitys[] = ['name' => $item->name, 'id_text' => $new_text->id_text];
						$card[] = [
							'model' => 'Abilitys',
							'values' => $array_abailitys
						];
						continue;
					}
					
					if ($field == 'text') {
						$array_text_card = [];
						foreach ($item as $text) {
							$text = Texts::firstOrNew(['text' => $text]);
							if ($text->exists == false)
								$text->save();
							
							
							$array_text_card[] = ['id_text' => $text->id_text];
						}
						
						$card[] = [
							'model' => 'TextCards',
							'values' => $array_text_card
						];
						continue;
					}
					
					if ($field == 'weaknesses') {
						$array_weaknesse = [];
						foreach ($item as $text) {
							$new_type = Types::firstOrNew(['type' => $text->type]);
							
							if ($new_type->exists == false)
								$new_type->save();
							
							$array_weaknesse[] = [
								'id_type' => $new_type->id_type,
								'value' => $text->value
							];
						}
						
						$card[] = [
							'model' => 'Weaknesses',
							'values' => $array_weaknesse
						];
						continue;
					}
					
					if ($field == 'resistances') {
						$array_resistances = [];
						foreach ($item as $text) {
							$new_type = Types::firstOrNew(['type' => $text->type]);
							
							if ($new_type->exists == false)
								$new_type->save();
							
							$array_resistances[] = [
								'id_type' => $new_type->id_type,
								'value' => $text->value
							];
						}
						
						$card[] = [
							'model' => 'Resistances',
							'values' => $array_resistances
						];
						continue;
					}
					
					if (snake_case($field) == 'number')
						if ((int)$item)
							$new_card['number_int'] = $item;
					
					$new_card[snake_case($field)] = $item;
				}
				$set = Sets::firstOrNew(['code' => $card_item->setCode]);
				if ($set->exists == false)
					$set->save();
				
				$new_card['id_set'] = $set->id_set;
				
				$card_created = Cards::firstOrNew($new_card);
				
				if ($card_created->exists == false)
					$card_created->save();
				
				foreach ($card as $item) {
					$array = false;
					$classe = "App\\Models\\" . $item['model'];
					
					$model = new $classe;
					
					$relation = [];
					
					
					$count = 0;
					foreach ($item['values'] as $field_relation => $value) {
						if (count($item['values']) > 1) {
							$array = true;
							foreach ($value as $field_item_relation => $item_relation) {
								$relation[$count][$field_item_relation] = $item_relation;
							}
						} else {
							$array = false;
							foreach ($value as $field_item_relation => $item_relation) {
								$relation[$field_item_relation] = $item_relation;
							}
						}
						$count++;
					}
					
					if ($array) {
						foreach ($relation as $relation_single) {
							$relation_single['id_card'] = $card_created->id_card;
							if ($item['model'] == 'Attacks') {
								$result = AttackCards::firstOrNew($relation_single);
								if ($result->exists == false)
									$result->save();
							} elseif ($item['model'] == 'Types') {
								$result = TypesCards::firstOrNew($relation_single);
								if ($result->exists == false)
									$result->save();
								
							} else {
								$result = $model->firstOrNew($relation_single);
								if ($result->exists == false)
									$result->save();
							}
						}
					} else {
						$relation['id_card'] = $card_created->id_card;
						if ($item['model'] == 'Attacks') {
							$result = AttackCards::firstOrNew($relation);
							if ($result->exists == false)
								$result->save();
						} elseif ($item['model'] == 'Types') {
							$result = TypesCards::firstOrNew($relation);
							if ($result->exists == false)
								$result->save();
							
						} else {
							$result = $model->firstOrNew($relation);
							if ($result->exists == false)
								$result->save();
						}
					}
					
				}
 */
