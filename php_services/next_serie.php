<?php

use function Symfony\Component\Clock\now;

require_once 'Connect.php';

class NextSerie
{
    private $connect;
    public function __construct()
    {
        $this->connect = new Connection();
    }

    public function nextSerieToEmit()
    {
        $carbon = new Carbon\Carbon();
        $now = $carbon::now();
        $nameOfDay = strtolower($now->format('l'));

        $series = [];
        while (empty($series)) {
            $result = $this->connect->query(
                "
                SELECT * FROM tv_series ts
                INNER JOIN tv_series_intervals tsi ON ts.id = tsi.tv_series_id
                WHERE tsi.week_day = LOWER('$nameOfDay')
                ORDER BY tsi.show_time ASC
                LIMIT 1
                "
            );
            $series = $result->fetchAll(PDO::FETCH_ASSOC);
            $nextDay = $now->addDay();
            $nameOfDay = strtolower($nextDay->format('l'));
        }

        echo json_encode($series);
    }
}
