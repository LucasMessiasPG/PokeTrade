<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Types extends Model
{
    protected $primaryKey = 'id_type';
    public $fillable = [
        'type'
    ];

}
