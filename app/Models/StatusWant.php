<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class StatusWant extends Model
{
    protected $primaryKey = 'id_status_want';
    protected $fillable = [
        'status'
    ];
}
