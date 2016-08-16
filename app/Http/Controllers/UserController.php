<?php

namespace App\Http\Controllers;


use App\Http\Requests\Login;
use Illuminate\Contracts\Auth\Guard;
use Illuminate\Support\Facades\Auth;
use Mockery\CountValidator\Exception;

class UserController extends Controller
{
	public function login(Login $login)
	{
	    if(\Auth::check())
            return response()->json([
                'status' => 'success',
                'user' => [
                    'login'=>\Auth::user()->login,
                    'email'=>\Auth::user()->email,
                    'cache'=>true
                ]
            ]);

		$creadentials = $login->only('login','password');
		try{
		            
			if(Auth::attempt($creadentials,true)){
				return response()->json([
					'status' => 'success',
					'user' => [
						'login'=>\Auth::user()->login,
						'email'=>\Auth::user()->email
					]
				]);
			}
			return response()->json([
				'status'=>'warning',
				'warning'=>'Login or password invalid'
			]);
		    
		            
		}catch (\Exception $e){
		    dd($e->getMessage());
		}
	}

	public function logout(){
	    \Auth::logout();
        return redirect('/');
    }

    /**
     * @return array
     */
    public function myCards()
    {
        try{
            $cards = Auth::user()->cards;
            foreach ($cards as $card) {
                $card->set;
            }
            $result = $cards;
            return $this->_return('Get all cards user','success',$result);
        }catch (\Exception $e){

        }
    }
}