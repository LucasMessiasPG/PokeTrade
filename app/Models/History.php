<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class History extends Model
{
    protected $primaryKey = 'id_history';
    protected $fillable = [
        'id_want',
        'id_user',
        'text'
    ];


    public function user()
    {
        return $this->hasOne(User::class,'id_user','id_user');
    }
    public function want()
    {
        return $this->hasOne(Want::class,'id_want','id_want');
    }
}
