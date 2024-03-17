<?php
// locale to America Bogota
setlocale(LC_TIME, 'es_CO.UTF-8');
//accept any request from any origin
header("Access-Control-Allow-Origin: *");

require 'vendor/autoload.php';
include 'Routes.php';
