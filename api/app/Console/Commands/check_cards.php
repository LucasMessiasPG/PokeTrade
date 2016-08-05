<?php

namespace App\Console\Commands;

use App\Jobs\CheckCards;
use App\Models\Sets;
use Illuminate\Console\Command;
use Mockery\CountValidator\Exception;

class check_cards extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'check:cards {--id_set=} {--all}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'check as card de uma set e compara com banco local';

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
            if($this->option('all')){
                $this->info('Realizando pesquisa de todas as coleções');
                $sets = Sets::all();
                foreach ($sets as $set) {
                    $this->info('id_set: '. $set->id_set.' - '.$set->name);
                    $job = new CheckCards($set);
                    dispatch($job);
                }
                $this->info('Finalizado');
                return true;
            }
            $set = Sets::first();
            $job = new CheckCards($set);
            dispatch($job);
            $this->info('Finalizado');

        }catch (Exception $e){
            $this->warn('Erro inesperado');
            $this->warn('Message: '.$e->getMessage());
            $this->warn('Line: '.$e->getLine());
            $this->warn('File: '.$e->getFile());
        }
    }
}
