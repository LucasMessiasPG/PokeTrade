<?php

namespace App\Jobs;

use App\Jobs\Job;
use App\Models\Cards;
use Illuminate\Queue\SerializesModels;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Support\Facades\Storage;

class DownloadImgCard extends Job implements ShouldQueue
{
    use InteractsWithQueue, SerializesModels;
	protected $card;
	
	/**
     * Create a new job instance.
     *
     * @return void
     */
    public function __construct(Cards $card)
    {
        $this->card = $card;
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
    	if(Storage::exists('img/'.$this->card->id_set.'/'.$this->card->number.'.jpg') == false)
	        Storage::put('img/'.$this->card->id_set.'/'.$this->card->number.'.jpg',file_get_contents($this->card->image_url));
    }
}
