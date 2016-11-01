<?php

namespace App\Http\Requests;

use App\Http\Requests\Request;

class AddCard extends Request
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
            'id_card' => 'required',
            'amount' => 'required',
            'foil' => 'required',
            'reverse_foil' => 'required',
            'full_art' => 'required'
        ];
    }
}
