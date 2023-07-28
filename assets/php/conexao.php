<?php

try {
    $con = new PDO('mysql:host=localhost; dbname=media;', 'root', '');
} catch (Error $e) {
    echo '<script>alert("Error: " ' . $e . ')</script>';
}
