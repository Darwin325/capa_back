<?php

require_once 'Connect.php';
require_once 'helpers.php';
require_once 'Serie.model.php';

class NextSerie
{
    private $serieModel;
    public function __construct()
    {
        $this->serieModel = new Serie();
    }

    public function nextSerieToEmit()
    {
        $series = $this->serieModel->nextSerieToEmit();
        echo json($series);
    }

    public function nextSerieToEmitByDay($day)
    {
        $series = $this->serieModel->nextSerieToEmitByDay($day);
        echo json($series);
    }

    public function nexThreeSuggestedSeries()
    {
        $nextEmit = $this->serieModel->nextSerieToEmit();
        $distinctId = array_map(function ($serie) {
            return $serie['id'];
        }, $nextEmit);
        $series = $this->serieModel->nexThreeSuggestedSeries((int)$distinctId);
        echo json($series);
    }
}
