<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class StatusMessage extends Model
{
	protected $primaryKey = 'id_status_message';
	protected $fillable = [
		'status',
	];
}
