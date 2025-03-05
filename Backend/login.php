<?php
require_once 'conexion.php';

$email = $_POST["e-mail"];
$password = $_POST["pass"];

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Validar campos vacíos
    if (empty($email) && empty($password)) {
        echo "Both fields are empty!";
    } elseif (empty($email)) {
        echo "Email is needed.";
    } elseif (empty($password)) {
        echo "Password is needed.";
    } else {
        $query = "CALL log_users(?, ?)";
        $stmt = $conn->prepare($query);

        if ($stmt === false) {
            die("Error en la preparación de la consulta: " . $conn->error);
        }

        $stmt->bind_param("ss", $password, $email);

        if (!$stmt->execute()) {
            die("Error al ejecutar la consulta: " . $stmt->error);
        }

        $result = $stmt->get_result();
        //validar contraseña y correo
        if ($result->num_rows > 0) {
            session_start();
            //cerrar la primera conexion
            $stmt->close();

            $stmt = $conn->prepare("SELECT rol FROM users WHERE email = ? AND password = ?");
            $stmt->bind_param("ss", $email, $password);
            $stmt->execute();
            $result = $stmt->get_result();
            $row = $result->fetch_assoc();

                if ($row) {
                    if ($row['rol'] === "postulante") {
                        header("Location:../interfaces/homePostu.php");
                        exit();
                    } elseif ($row['rol'] === "reclutador") {
                        header("Location:../interfaces/homeReclu.php");
                        exit();
                    } 
                }
                $stmt->close();
  

        } else {
            echo "Password or email is wrong, please try again";
            $stmt->close();

        }    
    }
}

// Cerrar la conexión
$conn->close();
?>




