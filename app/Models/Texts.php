<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Texts extends Model
{
    protected $primaryKey = 'id_text';
    public $fillable = [
        'text'
    ];
}
