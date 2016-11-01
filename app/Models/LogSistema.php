<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class LogSistema extends Model
{
    protected $primaryKey = 'id_log';
    protected $table = 'logs';
    protected $fillable = [
        'descricao',
        'error',
        'line',
        'file'
    ];
}
