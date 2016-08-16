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
				    'id_user'   =>  Auth::user()->id_user,
				    'login'     =>  Auth::user()->login,
				    'email'     =>  Auth::user()->email,
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
						'id_user'   =>  Auth::user()->id_user,
						'login'     =>  Auth::user()->login,
						'email'     =>  Auth::user()->email,
					],
					'cache' => true
				];
				if(Auth::user()->tutorial == false)
					$resoponse['tutorial'] = true;
				
				return response()->json($resoponse);
			}
			
			return response()->json([
				'status'=>'warning',
				'warning'=>'Login or Password Invalid'
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
					'id_user' => $user->id_user,
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
    
    public function profile($id_user)
    {
    	try{
    	            
    	    if($user = User::find($id_user)){
    	    	return ['status'=>'success','user'=>$user];
	        }
            return ['status'=>'warning','warning'=>'User not found'];
    	}catch (\Exception $e){
    	    
    	}
    }
}