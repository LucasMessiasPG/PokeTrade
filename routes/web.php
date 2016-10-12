<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| This file is where you may define all of the routes that are handled
| by your application. Just tell Laravel the URIs it should respond
| to using a Closure or controller method. Build something great!
|
*/

Route::get('/', function () {
    return view('master');
});

Route::group(['prefix'=>'api'],function(){

    Route::get('search','SearchController@search');
    Route::get('last-trades','SearchController@lastTrades');
    Route::get('home-data','SearchController@homeData');
    Route::get('sets','SearchController@set');
    Route::get('cards','SearchController@card');
    Route::get('card/{id_card}/details','SearchController@detail');
    Route::get('history/{id_history}','SearchController@history');

    Route::get('card/wants','SearchController@allWant');
    Route::get('card/trades','SearchController@allTrade');

    Route::get('logout','UserController@logout');
    Route::post('login','UserController@login');
    Route::post('register','UserController@register');

    Route::group(['middleware'=>['check']],function(){

        Route::get('/user/{id_user}/profile','UserController@profile');
        Route::post('/user/add-card','UserController@addCard');
        Route::post('/user/add-want','UserController@addWant');
        Route::get('/user/{id_want}/send-want','UserController@sendWant');
        Route::get('/user/{id_want}/remove-want','UserController@removeWant');
        Route::get('/user/{id_user_card}/remove-card','UserController@remove');
        Route::post('/user/{id_want}/edit-want','UserController@editWant');
        Route::get('want-list','UserController@myWantList');
        Route::get('my-cards','UserController@myCards');
        Route::get('my-messages','UserController@myMessages');

    });
});


Route::get('{all}/{all2?}', function () {
    return view('master');
});
