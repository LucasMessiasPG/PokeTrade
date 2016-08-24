<?php

namespace App\Console\Commands;

use App\Jobs\DownloadImgCard;
use App\Models\Cards;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Storage;

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
		    $bar = $this->output->createProgressBar(count($cards));
		
		    foreach ($cards as $card) {
			    if(Storage::exists('img/'.$card->id_set.'/'.$card->number.'.jpg') == false)
				    Storage::put('img/'.$card->id_set.'/'.$card->number.'.jpg',file_get_contents($card->image_url));
			    $bar->advance();
		    }
		
		    $bar->finish();
//		    foreach ($cards as $card) {
//		        $this->info($card->name);
//			    $job = new DownloadImgCard($card);
//			    dispatch($job);
//		    }
		    $this->info('Finalizado');
		
	    }catch (Exception $e){
		    $this->warn('Erro inesperado');
		    $this->warn('Message: '.$e->getMessage());
		    $this->warn('Line: '.$e->getLine());
		    $this->warn('File: '.$e->getFile());
	    }
    }
}
