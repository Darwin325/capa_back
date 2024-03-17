<?php
require_once 'next_serie.php';

$router = new AltoRouter();
$nextSerie = new NextSerie();

$router->map('GET', '/', function () {
    echo 'Hello world no puedo hacer nada';
});

$router->map('GET', '/next-serie', $nextSerie->nextSerieToEmit());
