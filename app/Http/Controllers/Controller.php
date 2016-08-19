<?php

namespace App\Http\Controllers;

use App\Models\LogSistema;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Auth\Access\AuthorizesResources;
use Mockery\CountValidator\Exception;

class Controller extends BaseController
{
    use AuthorizesRequests, AuthorizesResources, DispatchesJobs, ValidatesRequests;

    public function _return($message,$status = 'success',$opt = null)
    {
        $response = ['status' => $status, 'message' => $message];

        if($opt != null)
            $response['data'] = $opt;

        return response()->json($response);
    }
    public function _returnError($message,\Exception $e)
    {
		LogSistema::create([
			'descricao' => 'Erro: '.$message,
			'error' => $e->getMessage(),
			'line' => $e->getLine(),
			'file' => $e->getFile()
		]);
	    
        return response()->json([
        	'statsu' => 'error',
	        'msg' => $message,
        ]);
    }

}
