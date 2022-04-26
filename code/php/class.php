<!DOCTYPE html>
<html>
<body>

<?php
        // class == prototype / cetakan
        class Buah {

        // Properties (variabel, atribut)
        public $name;
        public $color;

        // Methods (Function)
        function set_name($name) {
            $this->name = $name;
        }
        function get_name() {
            return $this->name;
        }
        }
        
        // ini adalah objek (implementasi program) dari class Buah
        $apple = new Buah();
        $banana = new Buah();

        $apple->set_name('Apple');
        $banana->set_name('Banana');

        echo $apple->get_name();
        echo "<br>";
        echo $banana->get_name();
?>
 
</body>
</html>