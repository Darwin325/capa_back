<?php
require_once 'Connect.php';

class Serie
{
    private $connect;
    public function __construct()
    {
        $this->connect = new Connection();
    }

    public function nextSerieToEmit(): array
    {
        $carbon = new Carbon\Carbon();
        $now = $carbon::now();
        $nameOfDay = strtolower($now->format('l'));

        $series = [];
        while (empty($series)) {
            $result = $this->connect->query(
                "
                SELECT * FROM tv_series_intervals tsi
                INNER JOIN tv_series ts ON ts.id = tsi.tv_series_id
                WHERE tsi.week_day = LOWER('$nameOfDay')
                ORDER BY tsi.show_time ASC
                LIMIT 1
                "
            );
            $series = $result->fetchAll(PDO::FETCH_ASSOC);
            $nextDay = $now->addDay();
            $nameOfDay = strtolower($nextDay->format('l'));
        }

        return $series;
    }

    public function nextSerieToEmitByDay($day): array
    {
        $result = $this->connect->query(
            "
            SELECT * FROM tv_series_intervals tsi 
            INNER JOIN tv_series ts ON ts.id = tsi.tv_series_id
            WHERE tsi.week_day = LOWER('$day')
            ORDER BY tsi.show_time ASC
            LIMIT 1
            "
        );
        return $result->fetchAll(PDO::FETCH_ASSOC);
    }

    public function nexThreeSuggestedSeries(int $distinctId): array
    {
        $result = $this->connect->query(
            "
            SELECT * FROM tv_series_intervals tsi 
            INNER JOIN tv_series ts ON ts.id = tsi.tv_series_id
            WHERE ts.id NOT IN ($distinctId)
            ORDER BY RAND()
            LIMIT 3
            "
        );
        return $result->fetchAll(PDO::FETCH_ASSOC);
    }
}
