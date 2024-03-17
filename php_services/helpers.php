<?php

function json($data)
{
    header('Content-Type: application/json');
    $response = [
        'error' => false,
        'data' => $data,
    ];
    echo json_encode($response);
}
