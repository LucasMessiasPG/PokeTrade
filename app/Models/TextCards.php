<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class TextCards extends Model
{
    protected $primaryKey = 'id_text_card';
    protected $table = 'text_cards';
    public $fillable = [
        'id_card',
        'id_text',
    ];
}
