<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/

Route::get('/{poke}', function ($poke) {
//    $sets = \App\Models\Sets::where('name','ilike','fate%')->first();
    $cards = \App\Models\Cards::where('name','ilike',$poke)->get();
    $result = [];
    foreach ($cards as $card) {
        $result[] = $card->fullSet();
    }
    dd($result);
});

Route::group(['prefix'=>'api/v1','middleware' => 'cors'],function(){
    Route::get('search','SearchController@search');
});
