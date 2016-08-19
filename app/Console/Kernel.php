<?php

namespace App\Console;

use App\Console\Commands\check_cards;
use App\Console\Commands\check_imgs;
use App\Console\Commands\check_sets;
use App\Console\Commands\Messages\Message;
use App\Console\Commands\Messages\System;
use App\Console\Commands\Testes;
use Illuminate\Console\Scheduling\Schedule;
use Illuminate\Foundation\Console\Kernel as ConsoleKernel;

class Kernel extends ConsoleKernel
{
    /**
     * The Artisan commands provided by your application.
     *
     * @var array
     */
    protected $commands = [
        // Commands\Inspire::class,
        check_sets::class,
        check_cards::class,
	    check_imgs::class,
	    Testes::class,
	    Message::class,
	    System::class
    ];

    /**
     * Define the application's command schedule.
     *
     * @param  \Illuminate\Console\Scheduling\Schedule  $schedule
     * @return void
     */
    protected function schedule(Schedule $schedule)
    {
        // $schedule->command('inspire')
        //          ->hourly();
    }
}
