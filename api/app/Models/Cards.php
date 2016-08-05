<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Mockery\CountValidator\Exception;

class Cards extends Model
{
    protected $primaryKey = 'id_card';
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
        return $this->hasOne(Sets::class,'id_set','id_set');
    }
    public function attack()
    {
        return $this->belongsToMany(Attacks::class,'attack_cards','id_card','id_card','id_attack');
    }

    /////////// Templates /////////////

    public function fullSet()
    {
        $card = (object)$this->toArray();
        $attacks = [];
        foreach ($this->attack as $attack) {
            $attacks[] = (object)[
                'id_attack' => $attack->id_attack,
                'name' => $attack->name,
                'text' => $attack->text,
                'damage' => $attack->damage,
            ];
        }

        $card->attack = $attacks;

        return $card;
    }
}
