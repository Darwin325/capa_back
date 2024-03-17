<?php

// namespace App;

require_once 'next_serie.php';

require_once 'libs/main-main/router.php';

$nextSerie = new \NextSerie();

get('/test', function () {
    echo 'Awesome!';
});

get('/api/next-serie', function () use ($nextSerie) {
    $nextSerie->nextSerieToEmit();
});

get('/api/suggested-series', function () use ($nextSerie) {
    $nextSerie->nexThreeSuggestedSeries();
});
