<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Auth;

class UserCards extends Model
{
    protected $primaryKey = 'id_user_card';
    protected $fillable = [
        'id_user',
        'id_card',
        'id_user',
        'foil',
        'reverse_foil',
        'full_art'
    ];

    public function user()
    {
        return $this->hasOne(User::class,'id_user','id_user');
    }

    public function card()
    {
        return $this->hasOne(Cards::class,'id_card','id_card');
    }

    public static function create(array $attributes = [])
    {
        if(isset($attributes['id_user']) == false || $attributes['id_user'] == '')
            $attributes['id_user'] = Auth::user()->id_user;

        return parent::create($attributes); // TODO: Change the autogenerated stub
    }


}
