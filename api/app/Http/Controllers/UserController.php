<?php

namespace App\Http\Controllers;


use App\Http\Requests\Login;
use Illuminate\Contracts\Auth\Guard;
use Illuminate\Support\Facades\Auth;

class UserController extends Controller
{
	public function login(Login $login)
	{
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
	
	public function callteste()
	{
		dd('teste');
	}
}


/*
 *
 * public function login(Login $login)
	{
		$creadentials = $login->only('login', 'password');
		try {
			// verify the credentials and create a token for the user
			if (! $token = JWTAuth::attempt($creadentials)) {
				return response()->json(['error' => 'invalid_credentials'], 401);
			}
		} catch (JWTException $e) {
			// something went wrong
			return response()->json(['error' => 'could_not_create_token'], 500);
		}
		
		// if no errors are encountered we can return a JWT
		return response()->json(compact('token'));
	}
 */