<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class WeaknesseCards extends Model
{
    protected $primaryKey = 'id_weaknesse_card';
    protected $table = 'weaknesse_cards';
    protected $fillable = [
        'id_weaknesse',
        'id_card'
    ];
}
