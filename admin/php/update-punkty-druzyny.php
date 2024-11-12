<?php
header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Methods: GET, POST");
header("Access-Control-Allow-Headers: Content-Type");

include "../../db_connect.php";

// Get the JSON data from the request
$input = file_get_contents('php://input');
$data = json_decode($input, true);

// Debugging: Check the raw input and parsed data
file_put_contents('debug.log', "Raw input: " . $input . "\n", FILE_APPEND);
file_put_contents('debug.log', "Parsed data: " . print_r($data, true) . "\n", FILE_APPEND);

if (isset($data['punkty_druzyny'])) {
    $punkty_druzyny = $data['punkty_druzyny'];
} else {
    file_put_contents('debug.log', "Error: 'punkty_druzyny' key not found in data\n", FILE_APPEND);
    echo "Error: 'punkty_druzyny' key not found in data";
    exit;
}

// Prepare and bind
$stmt = $conn->prepare("UPDATE mvc_konkurs_druzyny SET punkty = ? WHERE id = ?");
$stmt->bind_param("ii", $punkty, $id);

// Update each team's points in the database
foreach ($punkty_druzyny as $index => $points) {
    $punkty = $points;
    $id = $index + 1; // Assuming IDs are 1-based and sequential
    $stmt->execute();
}

$stmt->close();
$conn->close();

echo json_encode(["status" => "success", "message" => "Punkty zostały zapisane pomyślnie."]);
?>