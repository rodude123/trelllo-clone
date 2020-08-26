<?php
//include dbConn and start php session
session_start();
include "dbConn.php";
//open connection to db
$conn = openConn();

//grab email and password posted
$email = $_POST["email"];
$password = $_POST["password"];

//run query
if ($result = mysqli_query($conn, "SELECT * FROM `users` WHERE `email`='$email'"))
{
    if (mysqli_num_rows($result) > 0)
    {
        //email exists
        while ($row = mysqli_fetch_array($result))
        {
            var_dump($row);
            if (password_verify($password, $row["password"]))
            {
                //email and password is correct
                echo "ok";
            }
            else
            {
                echo "Incorrect email or password";
            }
        }
    }
    else
    {
        //email doesn't exist
        echo "Incorrect email or password";
    }
}
else
{
    //query went wrong
    echo "Error something went wrong in the server end";
}

