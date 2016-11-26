<?php

namespace App\Http\Controllers;

use App\Models\Cards;
use App\Models\History;
use App\Models\Sets;
use App\Models\UserCards;
use App\Models\Want;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Mockery\CountValidator\Exception;

class SearchController extends Controller
{

    public function search(Request $request)
    {
        try {

            $campos = [
                'id_card',
                'page',
                'name',
                'set_name',
                'id_set',
                'number',
            ];

            $limit = 100;
            if ($request->limit)
                $limit = $request->limit;

            $card = Cards::select('cards.*', 'sets.name as setName');
            $card->join('sets', 'sets.id_set', '=', 'cards.id_set');


            if ($request->random)
                $card->inRandomOrder();
            else
                $card->orderBy('cards.number_int')->orderBy('cards.name');

            foreach ($request->only($campos) as $field => $value) {
                if ($value) {
                    switch ($field) {
                        case 'name':
                            $card->where('cards.name', 'ilike', '%' . $value . '%');
                            break;
                        case 'number':
                            $card->where('number', '=', $value);
                            break;
                        case 'id_set':
                            $card->where('cards.id_set', '=', $value);
                            break;
                        case 'set_name':
                            $card->where('sets.name', 'ilike', '%' . $value . '%');
                            break;
                        case 'id_card':
                            $card->where('cards.id_card', '=', $value);
                            break;
                    }
                }
            }

            $total = $card->get()->count();


            if ($request->page)
                $card->skip(($limit * ($request->page - 1)));

            $result = [];
            $cards = $card->get();
            
            foreach ($cards as $tempCard) {
                $result[] = $tempCard->fullset();
                if (count($result) >= $limit)
                    break;
            }

            return $this->_return('Get Search', 'success', ['total' => $total, 'result' => $result]);

        } catch (Exception $e) {
            return $this->_return('Search Fail', 'error');
        }
    }

    public function set()
    {
        try {
            $sets = Sets::orderBy('release_date', 'desc');

            return $this->_return('Get sets', 'success', $sets->get());
        } catch (\Exception $e) {
            return $this . _return('Set Fail', 'error', ['e' => $e->getMessage(), 'l' => $e->getLine(), 'f' => $e->getFile()]);
        }
    }

    public function card(Request $request)
    {
        try {


            $campos = [
                'name',
                'number',
            ];

            $limit = 100;
            if ($request->limit)
                $limit = $request->limit;

            $query = Cards::orderBy('name');
            $filter = $request->only($campos);

            foreach ($filter as $field => $value) {
                if ($value != '') {
                    switch ($field) {
                        case 'name':
                            $query->where('name', 'ilike', '%' . $value . '%');
                            break;
                        case 'number':
                            $query->where('number', '=', $value);
                            break;
                    }
                }
            }
            $cards = $query->take($limit)->get();
            $result = [];
            foreach ($cards as $card) {
                $result[] = $card->fullSet();
            }

            return $this->_return('Get cards', 'success', $result ? $result : []);
        } catch (\Exception $e) {
            return $this . _return('Cards Fail', 'error', ['e' => $e->getMessage(), 'l' => $e->getLine(), 'f' => $e->getFile()]);
        }
    }

    public function detail($id_card)
    {
        try {

            $card = Cards::find($id_card);
            $result = $card->fullSet();

            return $this->_return('Get cards datails', 'success', isset($result) ? $result : []);
        } catch (\Exception $e) {
            return $this->_returnError('Cards Datails Fail', $e);
        }
    }

    public function allWant(Request $request)
    {

        try {

            $query = Want::select(['wants.*', 'cards.name', 'cards.id_set'])
                ->join('cards', 'cards.id_card', '=', 'wants.id_card')
                ->leftJoin('user_cards', 'user_cards.id_card', '=', 'wants.id_card')
                ->leftJoin('users','users.id_user','=','wants.id_user')
                ->where('id_status_want', '=', 1)
                ->where(function($q){
                    if(Auth::check()){
                        $q->where('wants.pp','<=',\DB::raw('users.pp'));
                        $q->orWhere('wants.id_user','=',Auth::user()->id_user);
                    }else{
                        $q->where('wants.pp','<=',\DB::raw('users.pp'));
                    }
                })
                ->orderBy('wants.created_at', 'dec');

            foreach ($request->all() as $field => $value) {
                if($value == null || $value == "")
                    continue;
                
                switch ($field) {
                    case 'id_set':
                        $query->where('cards.id_set', '=', $value);
                        break;
                    case 'name':
                        $query->where('cards.name', 'ilike', '%' . $value . '%');
                        break;
                    case 'number':
                        $query->where('cards.number', '=', $value);
                        break;
                    case 'have':
                        if ($value == '1') {
                            if (Auth::check() == false)
                                break;
                            $id_user = Auth::user()->id_user;
                            $query->where('users.id_user', '=', $id_user);
                        }
                        break;
                }

            }

            $total = $query->get()->count();

            $limit = 100;
            if($request->limit)
                $limit = $request->limit;

            if ($request->page)
                $query->skip(($limit * ($request->page - 1)));


            $wants = $query->get();

            $result = [];
            $ids = [];
            foreach ($wants as $want) {
                $check = true;

                if (count($ids) == 0)
                    $ids[] = $want->id_want;
                else {
                    if (in_array($want->id_want,$ids))
                        $check = false;
                    else
                        $ids[] = $want->id_want;
                }

                if ($check) {
                    $result[] = (object)[
                        'have' => (UserCards::where('id_card', '=', $want->id_card)->where('id_user', '=', (Auth::check()) ? Auth::user()->id_user : '1')->get()->count() > 0) ? true : false,
                        'id_want' => $want->id_want,
                        'created_at' => $want->created_at->toDateTimeString(),
                        'pp' => $want->pp,
                        'foil' => $want->foil,
                        'reverse_foil' => $want->reverse_foil,
                        'card' => $want->card->fullSet(),
                        'user' => (object)[
                            'login' => $want->user->login,
                            'id_user' => $want->id_user
                        ],
                        'warning'=> $want->user->pp < $want->pp,
                        'my' => (Auth::check())? Auth::user()->id_user == $want->user->id_user : false
                    ];

                }
            }

            return $this->_return('Get wants', 'success', ["result"=>$result,"total"=>$total]);
        } catch (\Exception $e) {
            return $this->_returnError('Wants Fail', $e);
        }
    }

    public function allTrade(Request $request)
    {

        try {

            $limit = 30;
            if($request->limit)
                $limit = $request->limit;

            $query = Want::select(['wants.*', 'cards.name', 'cards.id_set'])
                ->join('cards', 'cards.id_card', '=', 'wants.id_card')
                ->leftJoin('user_cards', 'user_cards.id_card', '=', 'wants.id_card')
                ->where('id_status_want', '!=', 1)
                ->orderBy('wants.created_at', 'dec')
                ->limit($limit)
                ->skip($request->offset);

            if($request->have) {
                if(\Auth::check())
                    $query->where(function($q){
                        $q->where('wants.id_user', '=',\Auth::user()->id_user);
                        $q->orWhere('wants.id_user_from', '=',\Auth::user()->id_user);
                    });
            }

            foreach ($request->all() as $field => $value) {
                switch ($field) {
                    case 'id_set':
                        $query->where('cards.id_set', '=', $value);
                        break;
                    case 'name':
                        $query->where('cards.name', 'ilike', '%' . $value . '%');
                        break;
                    case 'number':
                        $query->where('cards.number', '=', $value);
                        break;
                    case 'have':
                        if ($value == '1') {
                            if (Auth::check() == false)
                                break;
                            $id_user = Auth::user()->id_user;
                            $query->where('user_cards.id_user', '=', $id_user);
                        }
                        break;
                }

            }
            $wants = $query->get();

            $result = [];
            foreach ($wants as $want) {
                $result[] = (object)[
                    'have' => (UserCards::where('id_card', '=', $want->id_card)->where('id_user', '=', (Auth::check()) ? Auth::user()->id_user : '1')->get()->count() > 0) ? true : false,
                    'id_want' => $want->id_want,
                    'status' => $want->status->status,
                    'created_at' => $want->created_at->toDateTimeString(),
                    'updated_at' => $want->updated_at->toDateTimeString(),
                    'pp' => $want->pp,
                    'foil' => $want->foil,
                    'reverse_foil' => $want->reverse_foil,
                    'card' => $want->card->fullSet(),
                    'user' => (object)[
                        'login' => $want->user->login,
                        'id_user' => $want->id_user
                    ],
                    'user_from' => (object)[
                        'login' => $want->user_from->login,
                        'id_user' => $want->id_user_from
                    ]
                ];
            }


            return $this->_return('Get wants', 'success', ["result"=>$result,"total"=>count($result)]);
        } catch (\Exception $e) {
            return $this->_returnError('Wants Fail', $e);
        }
    }


    public function lastTrades()
    {
        try {

            $result = Want::whereIn('id_status_want',[2,3])->take(10)->get();

            foreach ($result as $item) {
                $item->user;
                $item->user_from;
                $item->card;
            }

            return $this->_return('Get home data', 'success', isset($result) ? $result : []);
        } catch (\Exception $e) {
            return $this->_returnError('Last Trade Fail', $e);
        }
    }

    public function homeData()
    {
        try {


            $wants = Want::where('id_status_want', '=', 1)->count();
            $sends = Want::where('id_status_want', '=', 2)->count();
            $trades = Want::where('id_status_want', '=', 3)->count();

            $result = [
                'wants' => $wants,
                'trades' => $trades,
                'sends' => $sends
            ];

            return $this->_return('Get home data', 'success', isset($result) ? $result : []);
        } catch (\Exception $e) {
            return $this->_returnError('Home data Fail', $e);
        }
    }

    public function history($id_history)
    {
        try {

            $result = History::where('id_want','=',$id_history)->get();

            return $this->_return('Get history', 'success', isset($result) ? $result : []);
        } catch (\Exception $e) {
            return $this->_returnError('History Fail', $e);
        }
    }

}
