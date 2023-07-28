<?php

$pdo = new PDO('mysql:host=localhost;dbname=example', 'root', 'senha');
$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

// INSERT

if (isset($_POST['nome'])) {
    $sql = $pdo->prepare('INSERT INTO clientes VALUES (null, ?, ?)');
    $sql->execute(array($_POST['nome'], $_POST['email']));
    echo 'inserido com sucesso';
}

// SELECT

$sql = $pdo->prepare("SELECT * FROM clientes");
$sql->execute();

$fetchClientes = $sql->fetchAll();

foreach ($fetchClientes as $key => $value) {
    echo '<a href="?delete=' . $value['id'] . '">(x)</a>' . $value['nome'] . ' | ' . $value['email'];
    echo "<hr>";
}

// DELETE

if (isset($_GET['delete'])) {
    $id = (int) $_GET['delete'];
    $pdo->exec("DELETE FROM clientes WHERE id=$id");
    echo 'deletado com sucesso';
}
