<?php
//include dbConn and start php session
session_start();
include "dbConn.php";
//open connection to db
$conn = openConn();

$name = $_POST["name"];
$username = $_POST["username"];
$email = $_POST["email"];
$password = $_POST["password"];
$company = $_POST["company"];

if ($emRes = mysqli_query($conn, "SELECT * FROM `users` WHERE `email`='$email'"))
{
    if (mysqli_num_rows($emRes) < 0)
    {

    }
}
