<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Abilitys extends Model
{
    protected $primaryKey = 'id_ability';
    protected $table = 'abilitys';
    public $fillable = [
        'name',
        'id_text',
        'id_card'
    ];

    public function text()
    {
        return $this->hasOne(Texts::class,'id_text','id_text');
    }
}
