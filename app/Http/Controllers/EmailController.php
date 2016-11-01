<?php
namespace App\Http\Controllers;

use App\Jobs\SendMail;
use League\Flysystem\Exception;

class EmailController{

    public $to;
    public $cc = [];
    public $from;
    public $title;
    private $msg;
    private $files;
    private $view_email;
    private $view_data;
    private $type_msg;
    public $status;

    /**
     * EmailController constructor.
     * @param $to
     * @param $from
     * @param $message
     * @param $files
     * @param $type
     */
    public function __construct($to,$type = 'text')
    {
        $this->status = 'pendeing';
        if(is_array($to)){
                if(!$this->to)
                    $this->to = $email;
                else
                    $this->cc[] = $email;
            }
        }else {
            $this->to = $to;
        }
        $this->type = $type;
    }

    public function send()
    {
        if(!$this->msg && !$this->view_email)
            throw new Exception('Message or View is undefined');

        $job = (new SendMail($this))->onQueue('poke-emails');
        dispatch($job);
        $this->status = 'sending';
        return $this;
    }

    public function message($msg)
    {
        if($msg == '')
            throw new Exception('Message invalid');
        $this->msg = $msg;
        return $this;
    }

    /**
     * @param $view
     * @param null $data
     * @return $this
     */
    public function view($view, $data = null)
    {
        switch ($view){
            case 'welcome':
                if(!$this->title)
                    $this->title = 'Welcome PokeCards';
                break;
        }
        $this->view_email = 'emails.'.$view;
        $this->view_data = $data;
        return $this;
    }

    public function getView()
    {
        return $this->view_email;
    }


    public function type($type_msg)
    {
        if(!$this->validType($type_msg))
            throw new Exception('Type is invalid');
        $this->type_msg = $type_msg;
        return $this;
    }

    private function validType($type)
    {
        if(in_array($type,['text','html','url']));
            return true;

        return false;
    }

    public function getData()
    {
        return $this->view_data;
    }

    public function getMessage()
    {
        return $this->msg;
    }


}