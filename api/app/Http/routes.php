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

Route::get('/', function () {
    $sets = \App\Models\Sets::where('name','ilike','fate%')->first();
    $card = \App\Models\Cards::where('id_set','=',$sets->id_set)->where('name','ilike','mew')->first();
    dd($card->fullSet());
});
