<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class UserCards extends Model
{
    protected $primaryKey = 'id_user_card';
    protected $fillable = [
        'id_user',
        'id_card'
    ];

    public function user()
    {
        return $this->hasOne(User::class,'id_user','id_user');
    }

    public function card()
    {
        return $this->hasOne(Cards::class,'id_card','id_card');
    }
}
