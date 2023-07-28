<?php
session_start();

include("../conexao.php");

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    
    $password = $_POST["password"];
    $username = $_POST["username"];

    if (strlen($password) < 6) {
        echo "A senha deve ter no mínimo 6 caracteres.";
    } else {
        $hashedPassword = password_hash($password, PASSWORD_DEFAULT);

        $statement = $con->prepare("INSERT INTO usuarios (nome, email, senha) VALUES (:username, '', :password)");
        $statement->bindValue(":username", $username);
        $statement->bindValue(":password", $hashedPassword);
        $statement->execute();
    }
}
