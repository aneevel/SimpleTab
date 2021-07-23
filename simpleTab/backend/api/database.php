<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: PUT, GET, POST, DELETE");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

define('DB_HOST', 'localhost');
define('DB_USER', 'root');
define('DB_PASS', 'admin');
define('DB_NAME', 'simpletab');

function connect()
{
    $connect = mysqli_connect(DB_HOST, DB_USER, DB_PASS, DB_NAME);

    if (mysqli_connect_errno($connect)) {
        die("Failed to connect to database " . DB_NAME . ": " . mysqli_connect_error());
    }

    mysqli_set_charset($connect, "utf8");

    return $connect;
}

$connection = connect();
?>