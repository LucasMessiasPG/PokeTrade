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
        return $this->belongsToMany(Cards::class,'user_cards','id_user','id_user','id_card');
    }
}
