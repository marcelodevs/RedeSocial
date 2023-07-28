<?php

header('Content-Type: application/json');

include('../conexao.php');

$stmt = $con->prepare('SELECT nome FROM usuarios');
$stmt->execute();

if ($stmt->rowCount() >= 1) {
    echo json_decode($stmt->fetchAll(PDO::FETCH_ASSOC));
}
