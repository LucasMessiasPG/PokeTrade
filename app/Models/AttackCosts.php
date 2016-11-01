<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class AttackCosts extends Model
{
    protected $primaryKey = 'id_attack_cost';
    protected $table = 'attack_costs';
    protected $fillable = [
        'id_attack',
        'id_type'
    ];

}
