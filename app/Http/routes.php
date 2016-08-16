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

//change tag blade because angular tags
Blade::setContentTags('<%', '%>');
Blade::setEscapedContentTags('<%%', '%%>');

Route::get('/hash',function(){
    \App\Models\User::create([
        'login' => 'messias',
        'email' => 'lucasmessias.pg@outlook.com',
        'password' => Hash::make('123456'),
    ]);
    return 'criado';
});


Route::get('/',function(){return view('backend.master');});

Route::post('/login-user','UserController@login');
Route::get('/user/tutorial/{type}','UserController@tutorial');
Route::post('/register-user','UserController@register');

Route::get('/logout','UserController@logout');

Route::get('/templates/{template}','MainController@index');

Route::group(['prefix'=>'api/'],function(){

    Route::get('search','SearchController@search');

    Route::group(['middleware'=>['check']],function(){

        Route::get('my-cards','UserController@myCards');

    });
});

Route::get('{path}', function()
{
	return view("backend.master");
})->where("path", ".+");


