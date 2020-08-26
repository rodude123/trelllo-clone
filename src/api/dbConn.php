<?php

function openConn()
{
    $servername = "localhost";
    $dbname = "users";
    $dbusername = "root";
    $dbpassword = "Bangalore123";

    $conn = new mysqli($servername, $dbusername, $dbpassword, $dbname); // Create Connection.
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error); // Check connection.
    }

    return $conn;
}