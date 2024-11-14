<?php
header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Methods: GET, POST");
header("Access-Control-Allow-Headers: Content-Type");

include "../../db_connect.php";

$input = file_get_contents('php://input');
$data = json_decode($input, true);

file_put_contents('debug.log', "Raw input: " . $input . "\n", FILE_APPEND);
file_put_contents('debug.log', "Parsed data: " . print_r($data, true) . "\n", FILE_APPEND);

if (isset($data['punkty_druzyny'])) {
    $punkty_druzyny = $data['punkty_druzyny'];
} else {
    file_put_contents('debug.log', "Error: 'punkty_druzyny' key not found in data\n", FILE_APPEND);
    echo "Error: 'punkty_druzyny' key not found in data";
    exit;
}

$stmt = $conn->prepare("UPDATE mvc_konkurs_druzyny SET punkty = ? WHERE id = ?");
$stmt->bind_param("ii", $punkty, $id);

foreach ($punkty_druzyny as $index => $points) {
    $punkty = $points;
    $id = $index + 1; 
    $stmt->execute();
}

$stmt->close();
$conn->close();

echo json_encode(["status" => "success", "message" => "Punkty zostały zapisane pomyślnie."]);
?>