<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class AttackCards extends Model
{
    protected $primaryKey = 'id_attack_card';
    protected $table = 'attack_cards';
    protected $fillable = [
        'id_card',
        'id_attack'
    ];
}
