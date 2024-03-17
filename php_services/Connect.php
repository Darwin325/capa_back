<?php
require_once 'config/db.php';

class Connection
{
    private $pdo;
    public function __construct()
    {
        $this->connect();
    }

    public function __destruct()
    {
        $this->disconnect();
    }

    public function connect()
    {
        $this->pdo = new \PDO('mysql:host=' . DB_SERVER . ';dbname=' . DB_DATABASE, DB_USERNAME, DB_PASSWORD);
        $this->pdo->setAttribute(\PDO::MYSQL_ATTR_USE_BUFFERED_QUERY, false);
    }

    public function disconnect()
    {
        $this->pdo = null;
    }

    public function query($query)
    {
        return $this->pdo->query($query);
    }

    public function getUnbufferedResult()
    {
        return $this->pdo->query("SELECT * FROM tv_series");
    }
}
