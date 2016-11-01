<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;

class Sets extends Model
{
    protected $primaryKey = 'id_set';
    public $fillable = [
        'code',
        'name',
        'series',
        'standard_legal',
        'total_cards',
        'release_date',
    ];

    public function cards()
    {
        return $this->hasMany(Cards::class,'id_set','id_set');
    }
}
