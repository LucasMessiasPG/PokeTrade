<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Weaknesses extends Model
{
    protected $primaryKey = 'id_weaknesse';
    protected $fillable = [
        'id_type',
        'id_card',
        'value'
    ];
}
