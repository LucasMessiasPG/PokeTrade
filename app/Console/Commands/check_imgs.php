<?php

namespace App\Console\Commands;

use App\Jobs\DownloadImgCard;
use App\Models\Cards;
use Illuminate\Console\Command;

class check_imgs extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'check:img';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command description';

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
		    $cards = Cards::all();
		    foreach ($cards as $card) {
		        $this->info($card->name);
			    $job = new DownloadImgCard($card);
			    dispatch($job);
		    }
		    $this->info('Finalizado');
		
	    }catch (Exception $e){
		    $this->warn('Erro inesperado');
		    $this->warn('Message: '.$e->getMessage());
		    $this->warn('Line: '.$e->getLine());
		    $this->warn('File: '.$e->getFile());
	    }
    }
}
