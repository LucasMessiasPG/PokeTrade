<?php

namespace App\Http\Controllers;


use App\Http\Requests\Login;
use App\Http\Requests\Register;
use App\Models\User;
use Illuminate\Contracts\Auth\Guard;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Mockery\CountValidator\Exception;

class UserController extends Controller
{
	public function login(Login $login)
	{
	    if(Auth::check()) {
		    $resoponse = [
			    'status' => 'success',
			    'user' => [
				    'login' => \Auth::user()->login,
				    'email' => \Auth::user()->email,
			    ],
			    'cache' => true
		    ];
		    if(Auth::user()->tutorial == false)
			    $resoponse['tutorial'] = true;
		    
		    return response()->json($resoponse);
	    }

		$creadentials = $login->only('login','password');
		$creadentials['login'] = strtolower($creadentials['login']);
		
		try{
		            
			if(Auth::attempt($creadentials,true)){
				$resoponse = [
					'status' => 'success',
					'user' => [
						'login' => Auth::user()->login,
						'email' => Auth::user()->email,
					],
					'cache' => true
				];
				if(Auth::user()->tutorial == false)
					$resoponse['tutorial'] = true;
				
				return response()->json($resoponse);
			}
			
			dd(Auth::attempt($creadentials,true));
			return response()->json([
				'status'=>'warning',
				'warning'=>'Login or password invalid'
			]);
		    
		            
		}catch (\Exception $e){
		    dd($e->getMessage());
		}
	}
	
	public function tutorial($type)
	{
		if($type == 1)
			Auth::user()->tutorial = true;
		else
			Auth::user()->tutorial = false;
		
		Auth::user()->save();
	}
	
	public function register(Register $register)
	{
		try{
            $newUser = $register->all();
			$newUser['login'] = strtolower($newUser['login']);
			$newUser['email'] = strtolower($newUser['email']);
			$newUser['password'] = Hash::make($newUser['password']);
		    $user = User::create($newUser);
			
			Auth::login($user);
			
			return response()->json([
				'status' => 'success',
				'user' => [
					'login'=>$user->login,
					'email'=>$user->email
				],
				'tutorial' => true
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