<?php

namespace App\Jobs;

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
use App\Models\Weaknesses;
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
        LogSistema::create([
            'descricao' => 'Checando cards set: ' . $this->set->name.' id_set: '.$this->set->id_set
        ]);
        $ch = curl_init("https://api.pokemontcg.io/v1/cards?setCode=" . $this->set->code);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
        $result = curl_exec($ch);
        curl_close($ch);
        $api = json_decode($result);


//        if (count($api->cards) == $this->set->cards->count()) {
//            LogSistema::create([
//                'descricao' => 'set: ' . $this->set->name.' id_set: '.$this->set->id_set.' sem alteracao'
//            ]);
//            return true;
//        }

        foreach ($api->cards as $card_item) {
            $new_card = [];

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
                    $cost_attack = [];
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
                                continue;
                            }
                            $new_attack2['att'][snake_case($field_attack)] = $attack;
                            $new_attack2['cost'] = $cost_attack;
                        }

                        $all_attack_pokemon[] = $new_attack2;
                    }
                    foreach ($all_attack_pokemon as $single_attack_pokemon) {

                        $new_attack = Attacks::firstOrNew($single_attack_pokemon['att']);
                        if ($new_attack->exists == false)
                            $new_attack->save();

                        foreach ($single_attack_pokemon['cost'] as $cost) {
                            $new_attack_cost = AttackCosts::firstOrNew([
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
                    $abi = true;
                    $new_text = Texts::firstOrNew(['text' => $item->text]);
                    if ($new_text->existis == false)
                        $new_text->save();

                    $array_abailitys[] = ['name' => $item->name,'id_text' => $new_text->id_text];
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
                        $new_type = Types::firstOrNew(['type'=>$text->type]);

                        if($new_type->exists == false)
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
                        $new_type = Types::firstOrNew(['type'=>$text->type]);

                        if($new_type->exists == false)
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

                $new_card[snake_case($field)] = $item;
            }
            $new_card['id_set'] = $this->set->id_set;

            $card_created = Cards::firstOrNew($new_card);

            if ($card_created->exists == false)
                $card_created->save();

            foreach ($card as $item) {

                $classe = "App\\Models\\" . $item['model'];

                $model = new $classe;


                $relation = [];


                foreach ($item['values'] as $field_relation => $value) {
                    foreach ($value as $field_item_relation => $item_relation) {
                        $relation[$field_item_relation] = $item_relation;
                    }
                }

                $relation['id_card'] = $card_created->id_card;

                if($item['model'] == 'Attacks') {
                    $result = AttackCards::firstOrNew($relation);
                    if($result->exists == false)
                        $result->save();
                }elseif($item['model'] == 'Types'){
                    $result = TypesCards::firstOrNew($relation);
                    if($result->exists == false)
                        $result->save();

                }else {
                    $result = $model->firstOrNew($relation);
                    if($result->exists == false)
                        $result->save();
                }
            }
        }
        LogSistema::create([
            'descricao' => 'Finalizado cards set: ' . $this->set->name.' id_set: '.$this->set->id_set
        ]);
    }
}
