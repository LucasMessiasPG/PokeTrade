<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Attacks extends Model
{
    protected $primaryKey = 'id_attack';
    public $fillable = [
        'name',
        'text',
        'damage',
        'converted_energy_cost',
    ];

    public function card()
    {
        return $this->belongsToMany(Cards::class,'attack_cards','id_attack','id_card','id_card');
    }

    public function cost()
    {
        return $this->belongsToMany(Types::class,'attack_costs','id_attack','id_type','id_type');
    }
}
