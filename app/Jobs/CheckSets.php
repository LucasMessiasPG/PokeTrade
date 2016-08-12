<?php

namespace App\Jobs;

use App\Jobs\Job;
use App\Models\LogSistema;
use App\Models\Sets;
use Carbon\Carbon;
use Illuminate\Queue\SerializesModels;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;

class CheckSets extends Job implements ShouldQueue
{
    use InteractsWithQueue, SerializesModels;

    /**
     * Create a new job instance.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        LogSistema::create([
            'descricao'=>'Atualização iniciada'
        ]);

        $ch = curl_init("https://api.pokemontcg.io/v1/sets");
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
        $result = curl_exec($ch);
        curl_close($ch);
        $api = json_decode($result);

        $sets = Sets::all();

        if (count($sets) == count($api->sets)) {
            LogSistema::create([
                'descricao'=>'Banco Atualizado'
            ]);
            return true;
        }
        foreach ($api->sets as $set) {

            $new_set = [];

            foreach ($set as $field => $item) {
                if($field == 'releaseDate')
                    $new_set[snake_case($field)] = Carbon::createFromFormat('d/m/Y',$item)->toDateString();
                else
                    $new_set[snake_case($field)] = $item;
            }

            $set_created = Sets::firstOrNew($new_set);

            if($set_created->exists == false) {
                LogSistema::create([
                    'descricao' => 'Inserindo novo set: ' . $set_created->name.' id_set: '.$set_created->id_set
                ]);
            }

            $set_created->save();
        }
        return true;
    }
}
