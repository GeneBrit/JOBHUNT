<?php
require_once('conexion.php');

class Vacancy {
    // SQL commands
    // private static $select_one = 'SELECT id_vacante, puesto, descripcion, salario FROM vacantes WHERE id_vacante = ?';
    // private static $select_all = 'SELECT id_vacante, puesto, descripcion, salario FROM vacantes ORDER BY puesto';
    // private static $insert = 'INSERT INTO vacantes (id_vacante, puesto, descripcion, salario) VALUES (?, ?, ?, ?)';

    // Attributes
    private $id;
    private $name;
    private $salary;
    private $image;
    private $description;
    private $location;
    private $requirements;
    private $reclutador; //la llave foranea


    // Getters and setters
    public function get_id() { return $this->id; }
    public function set_id($value) { $this->id = $value; }

    public function get_name() { return $this->name; }
    public function set_name($value) { $this->name = $value; }

    public function get_image() { return $this->image; }
    public function set_image($value) { $this->image = $value; }
    
    public function get_salary() { return $this->salary; }
    public function set_salary($value) { $this->salary = $value; }

    public function get_location() { return $this->location; }
    public function set_location($value) { $this->location = $value; }

    public function get_requirements() { return $this->requirements; }
    public function set_requirements($value) { $this->requirements = $value; }

    // Constructor
    public function __construct(){
        if (func_num_args() == 0) {
            $this->id = '';
            $this->name = '';
            $this->salary = 0;
            $this->image = '';
    
        }

        if (func_num_args() == 4) {
            $args = func_get_args();
            $this->id = $args[0];
            $this->puesto = $args[1];
            $this->descripcion = $args[2];
            $this->salario = $args[3];
        }
    }

    // Add a new vacante
    public function add() {
        $connection = MySqlConnection::get_connection();
        $command = $connection->prepare(self::$insert);
        $command->bind_param('sssd', $this->id, $this->puesto, $this->descripcion, $this->salario);
        if ($command->execute())
            return Message::get_message(0, 'Vacante added successfully');
        else
            return Message::get_message(1, 'Could not add vacante');
    }

    // Convert to JSON
    public function to_json() {
        return json_encode(
            array(
                'id' => $this->id,
                'puesto' => $this->puesto,
                'descripcion' => $this->descripcion,
                'salario' => $this->salario
            )
        );
    }

    private function to_json_object() {
        return json_encode(
            array(
                'status' => 0,
                'vacante' => json_decode($this->to_json())
            )
        );
    }

    private static function to_json_array($list) {
        return json_encode(
            array(
                'status' => 0,
                'vacantes' => $list
            )
        );
    }

    // Get vacantes
    public static function get() {
        $connection = MySqlConnection::get_connection();
        $returnValue = null;

        if (func_num_args() == 0) {
            $list = Array();
            $command = $connection->prepare(self::$select_all);
            $command->execute();
            $command->bind_result($id, $puesto, $descripcion, $salario);

            while ($command->fetch()) {
                $v = new Vacante($id, $puesto, $descripcion, $salario);
                array_push($list, json_decode($v->to_json()));
            }
            $returnValue = self::to_json_array($list);
        }

        if (func_num_args() == 1) {
            $id = func_get_arg(0);
            $command = $connection->prepare(self::$select_one);
            $command->bind_param('s', $id);
            $command->execute();
            $command->bind_result($id, $puesto, $descripcion, $salario);

            if ($command->fetch()) {
                $v = new Vacante($id, $puesto, $descripcion, $salario);
                $returnValue = $v->to_json_object();
            } else {
                $returnValue = Message::get_message(1, 'Could not find vacante');
            }
        }

        return $returnValue;
    }
}
?>
