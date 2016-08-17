<?php

namespace App\Models;

use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable
{
	protected $primaryKey = 'id_user';
	/**
	 * The attributes that are mass assignable.
	 *
	 * @var array
	 */
	protected $fillable = [
		'login', 'email', 'password',
	];
	
	/**
	 * The attributes that should be hidden for arrays.
	 *
	 * @var array
	 */
	protected $hidden = [
		'password', 'remember_token','api_token',
	];

    public function cards()
    {
	    $cards = UserCards::where('id_user','=',$this->id_user)->get();
	    $result = [];
	    foreach ($cards as $key => $user_card) {
		    $result[$key] = $user_card->toArray();
		    $result[$key]['card'] = (array)$user_card->card->fullset();
	    }
        return ['cards' => $result,'amount_total' => $cards->sum('amount')];
    }

}
