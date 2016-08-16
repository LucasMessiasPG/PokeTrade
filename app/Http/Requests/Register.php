<?php

namespace App\Http\Requests;

use App\Http\Requests\Request;

class Register extends Request
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
	    return [
		    'email'=>'required|unique:users,email',
		    'login'=>'required|min:3|unique:users,login',
		    'password'=>'required|min:3',
		    'password_confirmation'=>'required|min:3'
	    ];
    }
}
