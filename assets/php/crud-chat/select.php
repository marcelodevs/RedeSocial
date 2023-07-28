<?php

header('Content-Type: application/json');

include('../conexao.php');

$msg = $_POST['message'];
$user = $_POST["user"];

$stmt = $con->prepare('SELECT * FROM chat');
$stmt->execute();

if ($stmt->rowCount() >= 1) {
    echo json_decode($stmt->fetchAll(PDO::FETCH_ASSOC));
}
