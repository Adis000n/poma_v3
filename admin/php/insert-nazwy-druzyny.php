<?php
header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Methods: GET, POST");
header("Access-Control-Allow-Headers: Content-Type");

include "../../db_connect.php";

// Get the JSON data from the request
$input = file_get_contents('php://input');
$data = json_decode($input, true);

if (isset($data['nazwy_druzyny'])) {
    $druzyny = $data['nazwy_druzyny'];
} 

// Prepare and bind
$stmt = $conn->prepare("UPDATE mvc_konkurs_druzyny SET nazwa = ? WHERE id = ?");
$stmt->bind_param("si", $nazwa, $id);

// Update each team name in the database
foreach ($druzyny as $index => $team) {
    $nazwa = $team;
    $id = $index + 1; // Assuming IDs are 1-based and sequential
    $stmt->execute();
}

$stmt->close();
$conn->close();

echo "Dane zostały zapisane pomyślnie.";
?>