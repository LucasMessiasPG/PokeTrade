<?php

namespace App\Jobs;

use App\Jobs\Job;
use App\Models\LogSistema;
use App\Models\Message;
use App\Models\StatusMessage;
use App\Models\User;
use Illuminate\Queue\SerializesModels;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;

class AddMesssage extends Job implements ShouldQueue
{
	use InteractsWithQueue, SerializesModels;
	/**
	 * @var string
	 */
	private $message;
	/**
	 * @var int
	 */
	private $status;
	/**
	 * @var User
	 */
	private $user;
    /**
     * @var
     */
    private $new;

    /**
     * Create a new job instance.
     *
     * @param User $user
     * @param string $message
     * @param int $status
     * @param bool $new
     */
	public function __construct(User $user,$message,$status,$new = false)
	{
		$this->message = $message;
		$this->status = $status;
		$this->user = $user;
        $this->new = $new;
    }
	
	/**
	 * Execute the job.
	 *
	 * @return void
	 */
	public function handle()
	{
		$status = StatusMessage::find($this->status);
		
		if ($status == null) {
			LogSistema::create([
				'descricao' => 'Erro ao enviar msg',
				'error' => 'status selecionado undifined',
				'line' => '45',
				'file' => '/App/Jobs/AddMesssage'
			]);
			$this->status = 1;
		}

        $message = [
            'text' => $this->message,
            'id_status_message' => $this->status,
            'id_user' => $this->user->id_user
        ];

        if($this->new)
            $message['id_user_from'] = 2;

        Message::create($message);
	}
}
