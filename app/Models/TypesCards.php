<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class TypesCards extends Model
{
    protected $primaryKey = null;
    protected $table = 'types_cards';
    public $fillable = [
        'id_type',
        'id_card'
    ];
}
