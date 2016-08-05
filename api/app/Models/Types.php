<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Types extends Model
{
    protected $primaryKey = 'id_set';
    public $fillable = [
        'type'
    ];

}
