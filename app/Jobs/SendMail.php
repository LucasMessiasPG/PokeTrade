<?php

namespace App\Jobs;

use App\Http\Controllers\EmailController;
use App\Jobs\Job;
use Aws\Ses\SesClient;
use Illuminate\Queue\SerializesModels;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Support\Facades\Mail;

class SendMail extends Job implements ShouldQueue
{
    use InteractsWithQueue, SerializesModels;
    /**
     * @var
     */
    private $email;

    /**
     * Create a new job instance.
     *
     * @param $email
     */
    public function __construct(EmailController $email)
    {
        $this->email = $email;
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        $view = $this->email->getView();
        if(isset($view)) {
            $data = $this->email->getData();
            Mail::send($view, compact('data'), function ($m) {
                $m->subject($this->email->title);
                $m->to($this->email->to);

                if($this->email->cc)
                    foreach ($this->email->cc as $cc) {
                        $m->cc($cc);
                    }
            });
            return true;
        }
        Mail::raw($this->email->getMessage(),function($m){
            $m->subject(($this->email->title)?$this->email->title:'PokeCards');
            $m->to($this->email->to);

            if($this->email->cc)
                foreach ($this->email->cc as $cc) {
                    if($cc)
                        $m->cc($cc);
                }
        });
        return true;
    }
}
