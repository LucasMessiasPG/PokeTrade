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

Route::get('/teste', function () {
	\Illuminate\Support\Facades\Storage::put('../teste.jpg',file_get_contents('https://s3.amazonaws.com/pokemontcg/xy11/48.png'));
});
Route::get('/login','UserController@login');

Route::group(['middleware' => ['web','check']], function()
{
	Route::get('/123teste','UserController@callteste');
});

Route::group(['prefix'=>'api/v1','middleware' => ['cors']],function(){
    Route::get('search','SearchController@search');
});
