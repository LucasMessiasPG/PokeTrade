<?php

namespace App\Console\Commands;

use App\Jobs\CheckSets;
use Illuminate\Console\Command;
use Mockery\CountValidator\Exception;

class check_sets extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'check:set';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'check quantidade de set que \'api.pokemontcg.io\' possui e compara com banco local';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        try {

            $this->info('Iniciando processo de checagem com site api.pokemontcg.io');
            $job = new CheckSets();
            dispatch($job);
            $this->info('Finalizado');

        } catch (Exception $e) {
            $this->warn('Erro inesperado');
            $this->warn('Message: '.$e->getMessage());
            $this->warn('Line: '.$e->getLine());
            $this->warn('File: '.$e->getFile());

        }
    }
}
