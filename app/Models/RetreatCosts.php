<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class RetreatCosts extends Model
{
    protected $primaryKey = null;
    protected $table = 'retreat_costs';
    public $fillable = [
        'id_card',
        'id_type',
    ];
}
