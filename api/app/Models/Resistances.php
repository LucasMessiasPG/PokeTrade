<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Resistances extends Model
{
    protected $primaryKey = 'id_resistance';
    public $fillable = [
        'value',
        'id_card',
        'id_type',
    ];
}
