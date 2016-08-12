<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Raritys extends Model
{
    protected $primaryKey = 'id_rarity';
    public $fillable = [
        'value',
    ];

}
