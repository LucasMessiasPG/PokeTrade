<?php

namespace App\Http\Controllers;

use App\Models\Cards;
use Illuminate\Http\Request;

use App\Http\Requests;
use Mockery\CountValidator\Exception;

class SearchController extends Controller
{
    public function search(Request $request)
    {
        try {

            $campos = [
                'name',
                'set',
                'number',
                'limit'
            ];

            $card = Cards::orderBy('name')->take(100);
            foreach ($request->only($campos) as $field => $value) {
                if($value){
                    switch ($field){
                        case 'name':
                            $card->where('name','ilike','%'.$value.'%');
                            break;
                        case 'number':
                            $card->where('number','=',$value);
                            break;
                    }
                }
            }
            $result = [];
            foreach ($card->get() as $tempCard) {
                $result[] = $tempCard->fullset();
            }
            return $result;

        } catch (Exception $e) {

        }
    }
}
