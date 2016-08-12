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


Route::get('/',function(){return view('backend.master');});
Route::get('/login','UserController@login');
Route::get('/templates/{template}','MainController@index');
//Route::get('/search',function(){
//	return redirect('/search');
//});

Route::any('{path}', function()
{
	return view("backend.master");
})->where("path", ".+");
Route::group(['prefix'=>'api/v1','middleware' => ['cors']],function(){
    Route::get('search','SearchController@search');
});
