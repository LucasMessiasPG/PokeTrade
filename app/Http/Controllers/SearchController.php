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
                'page',
                'name',
                'set_name',
                'number',
                'limit'
            ];

            $limit = 100;


            $card = Cards::select('cards.*','sets.name as setName')->orderBy('cards.number_int')->orderBy('cards.name')->take($limit);
            $card->join('sets','sets.id_set','=','cards.id_set');

            if($request->page)
                $card->skip(($limit*($request->page-1)));


            foreach ($request->only($campos) as $field => $value) {
                if($value){
                    switch ($field){
                        case 'name':
                            $card->where('cards.name','ilike','%'.$value.'%');
                            break;
                        case 'number':
                            $card->where('number','=',$value);
                            break;
                        case 'set_name':
                            $card->where('sets.name','ilike','%'.$value.'%');
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
