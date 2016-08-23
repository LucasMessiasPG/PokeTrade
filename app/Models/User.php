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
	    $cards = UserCards::where('id_user','=',$this->id_user)->orderBy('created_at','desc')->get();
	    $result = [];
	    foreach ($cards as $key => $user_card) {
		    $result[$key] = [
			    'created_at' => $user_card->created_at->toDateTimeString(),
			    'foil' => $user_card->foil,
			    'reverse_foil' => $user_card->foil,
		    ];
		    $result[$key]['card'] = (array)$user_card->card->fullset();
	    }
        return ($result)?$result:[];
    }

    public function wants()
    {
        $want = Want::where('id_user','=',$this->id_user)->where('id_status_want','=',1)->orderBy('created_at','desc')->get();
        $result = [];
        foreach ($want as $key => $user_want) {
            $result[$key] = $user_want->toArray();
            $result[$key]['card'] = (array)$user_want   ->card->fullset();
        }
        return ($result)?$result:[];
    }
    
    public function trades()
    {
        $want = Want::where('id_user','=',$this->id_user)->where('id_status_want','=',3)->orderBy('created_at','desc')->get();
        $result = [];
        foreach ($want as $key => $user_want) {
            $result[$key] = $user_want->toArray();
            $result[$key]['card'] = (array)$user_want   ->card->fullset();
        }
        return ($result)?$result:[];
    }
    
    public function fullSet()
    {
    	$user = new \stdClass();
	    $user->id_user = $this->id_user;
	    $user->login = $this->login;
	    $user->email = $this->email;
	    $user->pp = $this->pp;
	    $wants = $this->wants();
	    $pp_wants = 0;
	    foreach ($wants as $want) {
		    $pp_wants += $want['pp'];
	    }
	    $user->wants = $wants;
	    $user->pp_wants = $pp_wants;
	    
	    $trades = $this->trades();
	    $pp_trade = 0;
	    foreach ($trades as $trade) {
		    $pp_trade += $trade['pp'];
	    }
	    $user->trades = $trades;
	    $user->pp_trades = $pp_trade;
	    
	    $user->cards = $this->cards();
	    
	    return $user;
    }

}
