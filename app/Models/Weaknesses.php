<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Weaknesses extends Model
{
    protected $primaryKey = 'id_weakness';
    protected $fillable = [
        'id_type',
        'id_card',
        'value'
    ];

    public function type()
    {
        return $this->hasOne(Types::class,'id_type','id_type');
    }
}
