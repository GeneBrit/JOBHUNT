<?php
require_once('mysql.php');
class User{    
    // Atributos
    private $id;
    private $firstname;
    private $lastname;
    private $password;
    private $email;
    private $rol;

    //Operaciones en la bd
    //aqui van los queries
    
    // Conexión a la base de datos
    private $conn;

    // Getters y setters
    public function getId() {
        return $this->id;
    }

    public function setId($id) {
        $this->id = $id;
    }
    
    public function getFirstname() {
        return $this->firstname;
    }
    
    public function setFirstname($firstname) {
        $this->firstname = $firstname;
    }
    
    public function getLastname() {
        return $this->lastname;
    }
    
    public function setLastname($lastname) {
        $this->lastname = $lastname;
    }
    
    public function getPassword() {
        return $this->password;
    }
    
    public function setPassword($password) {
        // Encriptar la contraseña antes de guardarla
        $this->password = password_hash($password, PASSWORD_DEFAULT);
    }
    
    public function getEmail() {
        return $this->email;
    }
    
    public function setEmail($email) {
        $this->email = $email;
    }
    
    public function getRol() {
        return $this->rol;
    }
    
    public function setRol($rol) {
        $this->rol = $rol;
    }
        
}// User
?>

