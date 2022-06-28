<?php

namespace App\Http\Controllers\Api;

class ApiBgImages
{
    public function __invoke()
    {
        $image = 'bg-beach.jpg';

        $files = scandir(public_path('images/bg'));

        $files = collect($files)->filter(function ($item) {
            return $item != '.' && $item != '..';
        })->shuffle();

        return $files[0];
    }
}
