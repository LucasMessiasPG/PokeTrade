<?php

namespace App\Http\Controllers;

use App\Models\Cards;
use App\Models\Sets;
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
                'id_set',
                'number',
            ];

            $limit = 100;
            if($request->limit)
                $limit = $request->limit;



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
                        case 'id_set':
                            $card->where('cards.id_set','=',$value);
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

            return $this->_return('Get Search','success',$result);

        } catch (Exception $e) {
            return $this->_return('Search Fail','error');
        }
    }

    public function set()
    {
        try{
            $sets  = Sets::orderBy('release_date','desc');

            return $this->_return('Get sets','success',$sets->get());
        }catch (\Exception $e){
            return $this._return('Set Fail','error',['e'=>$e->getMessage(),'l'=>$e->getLine(),'f'=>$e->getFile()]);
        }
    }

    public function card(Request $request)
    {
        try{


            $campos = [
                'name',
                'number',
            ];

            $limit = 100;
            if($request->limit)
                $limit = $request->limit;

            $query = Cards::orderBy('name');
            $filter = $request->only($campos);

            foreach ($filter as $field => $value) {
                if($value != ''){
                    switch ($field){
                        case 'name':
                            $query->where('name','ilike','%'.$value.'%');
                            break;
                        case 'number':
                            $query->where('number','=',$value);
                            break;
                    }
                }
            }
            $cards = $query->take($limit)->get();
            $result = [];
            foreach ($cards  as $card) {
                $result[] = $card->fullSet();
            }

            return $this->_return('Get cards','success',$result?$result:[]);
        }catch (\Exception $e){
            return $this._return('Cards Fail','error',['e'=>$e->getMessage(),'l'=>$e->getLine(),'f'=>$e->getFile()]);
        }
    }
    
    public function detail($id_card)
    {
    	try{
			
    		$card = Cards::find($id_card);
		    $result = $card->fullSet();
		
		    return $this->_return('Get cards datails','success',isset($result)?$result:[]);
	    }catch (\Exception $e){
		    return $this->_returnError('Cards Datails Fail',$e);
	    }
    }
}
