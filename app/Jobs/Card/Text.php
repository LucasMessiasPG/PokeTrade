<?php

namespace App\Jobs\Card;

use App\Jobs\Job;
use App\Models\Cards;
use App\Models\TextCards;
use App\Models\Texts;
use Illuminate\Queue\SerializesModels;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;

class Text extends Job implements ShouldQueue
{
    use InteractsWithQueue, SerializesModels;
    /**
     * @var Cards
     */
    private $cards;
    /**
     * @var
     */
    private $text;

    /**
     * Create a new job instance.
     *
     * @param Cards $cards
     * @param $text
     */
    public function __construct(Cards $cards, $text)
    {
        $this->cards = $cards;
        $this->text = $text;
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        foreach ($this->text as $text) {
            $new_text = Texts::firstOrCreate([
                'text' => $text
            ]);
            TextCards::firstOrCreate([
                'id_text' => $new_text->id_text,
                'id_card' => $this->cards->id_card
            ]);
        }

    }
}
