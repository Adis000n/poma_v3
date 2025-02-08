<?php


include "../../db_connect.php";


$input = file_get_contents('php://input');
$data = json_decode($input, true);

if (isset($data['nazwy_druzyny'])) {
    $druzyny = $data['nazwy_druzyny'];
} 

$stmt = $conn->prepare("UPDATE mvc_konkurs_druzyny SET nazwa = ? WHERE id = ?");
$stmt->bind_param("si", $nazwa, $id);

foreach ($druzyny as $index => $team) {
    $nazwa = $team;
    $id = $index + 1; 
    $stmt->execute();
}

$stmt->close();
$conn->close();


?>