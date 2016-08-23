<?php

namespace App\Http\Controllers;


use App\Http\Requests\AddCard;
use App\Http\Requests\EditWant;
use App\Http\Requests\Login;
use App\Http\Requests\Register;
use App\Jobs\AddMesssage;
use App\Models\Cards;
use App\Models\Message;
use App\Models\User;
use App\Models\UserCards;
use App\Models\Want;
use Illuminate\Contracts\Auth\Guard;
use Illuminate\Http\Request;
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
				    'pp'        =>  Auth::user()->pp,
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
				
				$msg = 'Login ip '.$login->ip();
				$this->dispatch(new AddMesssage(Auth::user(),$msg,5));
				
				$resoponse = [
					'status' => 'success',
					'user' => [
						'id_user'   =>  Auth::user()->id_user,
						'login'     =>  Auth::user()->login,
						'pp'        =>  Auth::user()->pp,
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
			
			$msg = 'Wellcome to PokeTrade.com';
			$this->dispatch(new AddMesssage(Auth::user(),$msg,2,true));

			$msg = 'Register';
			$this->dispatch(new AddMesssage(Auth::user(),$msg,3));

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
            return $this->_returnError('Registel Fail',$e);
		}
	}

	public function logout(){
		$msg = 'Logout';
		$this->dispatch(new AddMesssage(Auth::user(),$msg,5));
	    \Auth::logout();
        return redirect('/');
    }

    /**
     * @return array
     */
    public function myCards()
    {
        try{
            $cards = \Auth::user()->cards();
            return $this->_return('Get all cards user','success',$cards);
        }catch (\Exception $e){
            return $this->_returnError('Cards User Fail',$e);
        }
    }
    
    public function myMessages(Request $request)
    {
    	try{

    	    $limit = 100;
    		
            $field = ['text','created_at','id_status_message','id_user_from'];
    	    $query = Message::select($field)
		        ->where('id_user','=',Auth::user()->id_user)
		        ->orderBy('created_at','desc');

            $query->take($limit);

    		if($request->id_status_message != null){
                $query->whereIn('id_status_message',explode(',',$request->id_status_message));
		    }
		    
		    
    		if($request->last != null){
			    $messages = [];
    			$temp_message = $query->get();
			    if($request->id_status_message)
			    	$only = explode(',',$request->id_status_message);
			    else
			    	$only = [1,2,3,4,5,6];
			    
			    foreach ($temp_message as $msg) {
			    	if(in_array($msg->id_status_message,$only)) {
			    		$messages[] = $msg;
					    unset($only[array_search($msg->id_status_message,$only)]);
				    }
                    if(count($only) === 0)
                        break;
			    }
		    }else{
		        $messages = $query->get();
		    }
		    foreach ($messages as $message) {
			    $message->from;
		    }
		    return $this->_return('Message user','success',$messages);
    	}catch (\Exception $e){
            return $this->_returnError('Message user Fail',$e);
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
            return $this->_returnError('Fail get user',$e);
    	}
    }

    public function addCard(AddCard $addCard)
    {
        try{
            $amount = $addCard->amount;
            if($amount > 10)
                $amount = 10;

	        $card = Cards::find($addCard->id_card);
	        $msg = 'Add in my card list '.$addCard->amount.' new card \''.$card->name.' (#'.$card->number.'/'.$card->set->total_cards.')'.'\' with '.$addCard->price.' PokePoint';
	        $this->dispatch(new AddMesssage(Auth::user(),$msg,6));
	        
            for($i=0; $i< $amount; $i++) {
                UserCards::create($addCard->all());
            }
            return $this->_return('Add card','success');
        }catch (\Exception $e){
            return $this->_returnError('Add Card Fail',$e);
        }
    }
    public function addWant(AddCard $addCard)
    {
        try{
            $amount = $addCard->amount;
            if($amount > 10)
                $amount = 10;

	        if($addCard->pp > 100000)
	        	throw new Exception('Invalid price, value over 100000');

	        $card = Cards::find($addCard->id_card);
	        $msg = 'Add in my want card list '.$addCard->amount.' new card \''.$card->name.' (#'.$card->number.'/'.$card->set->total_cards.')'.'\' with '.$addCard->pp.' PokePoint';
	        $this->dispatch(new AddMesssage(Auth::user(),$msg,6));

            for($i=0; $i< $amount; $i++) {
                Want::create($addCard->all());
            }
            return $this->_return('Add want card','success');
        }catch (\Exception $e){
            return $this->_returnError('Add Want Card Fail',$e);
        }
    }

    public function myWantList()
    {
        try{

            $wants = \Auth::user()->wants();

            return $this->_return('Get Want List','success',($wants)?$wants:[]);
        }catch (\Exception $e){
            return $this->_returnError('Want List Fail',$e);
        }
    }

    public function removeWant($id_want)
    {
        try{

            $want = Want::find($id_want);
            $card = Cards::find($want->id_card);
            $msg = 'Remove in my want card list \''.$card->name.' (#'.$card->number.'/'.$card->set->total_cards.')'.'\' with '.$want->pp.' PokePoint';
            $this->dispatch(new AddMesssage(Auth::user(),$msg,6));

            $want->delete();

            return $this->_return('Remove Want List','success');
        }catch (\Exception $e){
            return $this->_returnError('Remove Want List Fail',$e);
        }
    }

    public function editWant($id_want,EditWant $editWant)
    {
        try{

            if($editWant->pp > 100000)
                throw new Exception('Invalid price, value over 100000');

            $want = Want::find($id_want);
            $old_pp = $want->pp;
            $want->update($editWant->all());


            $msg = 'You edit '.$want->card->name.'(#'.$want->card->number.'/'.$want->card->set->total_cards.') from '.$old_pp.' to '.$want->pp.' PokePoint';
            $this->dispatch(new AddMesssage(Auth::user(),$msg,6));

            return $this->_return('Edit Want List','success');
        }catch (\Exception $e){
            return $this->_returnError('Edit Want List Fail',$e);
        }
    }

    public function sendWant()
    {

    }
}
