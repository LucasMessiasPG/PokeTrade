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
                'codeSet',
                'limit'
            ];

            $result = [];
            foreach ($request->only($campos) as $field => $value) {
                if($value){
                    switch ($field){
                        case 'name':
                            $cards = Cards::where('name','ilike',$value)->get();
                            $search_card = [];
                            foreach ($cards as $card) {
                                $search_card[] = $card->fullSet();
                            }
                            $result = array_merge((array)$search_card,$result);
                            break;
                    }
                }
            }
            return $result;

        } catch (Exception $e) {

        }
    }
}
