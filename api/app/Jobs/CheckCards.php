<?php

namespace App\Jobs;

use App\Jobs\Job;
use App\Models\Cards;
use App\Models\Raritys;
use App\Models\Sets;
use App\Models\Texts;
use App\Models\Types;
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
    public function __construct(Sets $set)
    {
        $this->set = $set;
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        $ch = curl_init("https://api.pokemontcg.io/v1/cards?setCode=" . $this->set->code);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
        $result = curl_exec($ch);
        curl_close($ch);
        $api = json_decode($result);

        if (count($api->cards) == $this->set->cards->count())
            dd('igual');

        foreach ($api->cards as $card) {
            $new_card = [];
            $new_retreat_cost = [];
            $new_card_types = [];

            foreach ($card as $field => $item) {

                if ($field == 'rarity') {
                    $new_rarity = Raritys::firstOrNew(['value' => $item]);
                    $new_rarity->save();
                    continue;
                }

                if ($field == 'retreatCost') {
                    foreach ($item as $type) {
                        $new_retreat_cost[] = $type;
                    }
                    continue;
                }

                if ($field == 'types') {
                    foreach ($item as $type) {
                        $new_types = Types::firstOrCreate(['type'=>$type]);
                        if($new_types->exists == false)
                            $new_types->save();
                        $new_card_types[] = $new_types->id_type;
                    }
                    continue;
                }

                if ($field == 'attacks') {
                    foreach ($item as $attack_item) {
                        foreach ($attack_item as $field_attack => $attack) {
                            if($field_attack == 'cost'){
                                $cost_attack = [];
                                foreach ($attack as $type_attack) {
                                    $new_types = Types::firstOrNew(['type'=>$type_attack]);
                                    if($new_types->exists == false)
                                    $new_types->save();
                                    $cost_attack[] = $new_types->id_type;
                                }
                                continue;
                            }
                            $new_attack[snake_case($field_attack)] = $attack;
                        }
                        $all_attack_pokemon[] = $new_attack;
                    }
                    dd($all_attack_pokemon);
                    continue;
                }

                if ($field == 'ability') {
                    dd($item);
                    $new_text = Texts::firstOrNew(['text' => $item->text]);
                    $new_text->save();
                    $new_ability = [
                        'name' => $item->name,
                        'id_text' => $new_text->id_text
                    ];
                    continue;
                }


                $new_card[snake_case($field)] = $item;
            }
            $card_created = Cards::firstOrNew($new_card);
            dd($card_created,$new_card,$new_retreat_cost,$new_card_types);

        }
    }
}
