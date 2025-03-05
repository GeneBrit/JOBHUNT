<?php

$servername = "localhost";
$username = "root";
$password = "cisco";
$dbname = "jobhunt";

//conexion

$conn = new mysqli($servername, $username, $password, $dbname);

//validar la conexion

if ($conn->connect_error){
die("Conexion fallida: " . $conn->connect_error);
}
else{
    //echo "Conexion exitosa";
}

?>