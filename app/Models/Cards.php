<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Cache;
use Mockery\CountValidator\Exception;
use Stichoza\GoogleTranslate\TranslateClient;

class Cards extends Model
{
    protected $primaryKey = 'id_card';
    public $hidden = [
      'id',
      'created_at',
      'updated_at'
    ];
    public $fillable = [
        'id',
        'name',
        'national_pokedex_number',
        'image_url',
        'subtype',
        'supertype',
        'hp',
        'number',
        'artist',
        'id_set',
        'id_rarity',
    ];

    /////////// Relationships /////////////

    public function set()
    {
        return $this->hasOne(Sets::class, 'id_set', 'id_set');
    }

    public function attack()
    {
        return $this->belongsToMany(Attacks::class, 'attack_cards', 'id_card', 'id_card', 'id_attack');
    }

    public function ability()
    {
        return $this->hasMany(Abilitys::class,'id_card','id_card');
    }

    public function weakness()
    {
        return $this->hasOne(Weaknesses::class,'id_card','id_card');
    }

    public function resistances()
    {
        return $this->hasOne(Resistances::class,'id_card','id_card');
    }

    public function rarity()
    {
        return $this->hasOne(Raritys::class,'id_rarity','id_rarity');
    }

    /////////// Templates /////////////

    public function fullSet()
    {

        $tr = new TranslateClient('en', 'pt-br');

        $card = (object)$this->toArray();

        $card->rarity = $this->rarity->value;
        $card->set = $this->set->name;
        $card->set_number = $this->set->id_set;
        $card->total_set = $this->set->total_cards;
        $card->card_set = $this->number.'/'.$this->set->total_cards;

        unset($card->id_rarity);
        unset($card->id_set);

//        $card->transalate = 'pr-br';

        if(isset($card->transalate))
            $call_transalate = true;
        else
            $call_transalate = false;


        $attacks = [];
        $cost_attack = [];
        $abilitys = [];
        $weakness = [];
        foreach ($this->attack as $attack) {
            foreach ($attack->cost as $cost) {
                $cost_attack[] = (object)[
                    'type' => $cost->type
                ];
            }
            if($call_transalate)
                $tranlated = $tr->translate([$attack->name,$attack->text]);

            $attacks[] = (object)[
                'id_attack' => $attack->id_attack,
                'name' => ($call_transalate)?$tranlated[0]:$attack->name,
                'text' => ($call_transalate)?$tranlated[1]:$attack->text,
                'damage' => $attack->damage,
                'cost' => $cost_attack
            ];
        }

        if($this->ability) {
            foreach ($this->ability as $ability) {

                if($call_transalate)
                    $tranlated = $tr->translate([$ability->name,$ability->text->text]);

                $abilitys[] = (object)[
                    'name' => ($call_transalate)?$tranlated[0]:$ability->name,
                    'text' => ($call_transalate)?$tranlated[1]:$ability->text->text
                ];
            }
        }
        if($this->resistances) {
            $card->resistences = [
                'type' => $this->resistances->type->type,
                'value' => $this->resistances->value
            ];
        }

        if($this->weakness) {
            $weakness[] = (object)[
                'type' => $this->weakness->type->type,
                'value' => $this->weakness->value
            ];

            $card->weakness = $weakness;
        }

        $card->ability = $abilitys;

        $card->attack = $attacks;

        return $card;
    }
}
