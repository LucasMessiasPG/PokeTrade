<?php

//use Aws\Laravel\AwsServiceProvider;

return [
    'credentials' => [
        'key'    => env('SES_KEY'),
        'secret' => env('SES_SECRET'),
    ],
    'region' => env('AWS_REGION'),
    'version' => 'latest',

    // You can override settings for specific services
    'Ses' => [
        'region' => 'us-east-1',
    ],
];