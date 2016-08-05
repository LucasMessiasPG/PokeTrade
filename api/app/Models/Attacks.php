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
        return $this->belongsToMany(Cards::class,'attack_cards','id_attack','id_attack','id_card');
    }
    public function cost()
    {
        return $this->hasMany(AttackCosts::class,'id_attack','id_attack');
    }
}
