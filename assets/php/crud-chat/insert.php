<?php

header('Content-Type: application/json');

include('../conexao.php');

$msg = $_POST['message'];
$user = $_POST["user"];

$stmt = $con->prepare('INSERT INTO chat(user, msg) VALUES (:us, :ms)');
$stmt->bindValue(':us', $user);
$stmt->bindValue(':ms', $msg);
$stmt->execute();

if ($stmt->rowCount() >= 1) {
    echo json_decode('Comentário salvo com sucesso');
}
