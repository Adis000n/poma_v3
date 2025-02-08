<?php


include "../../db_connect.php";

$input = file_get_contents('php://input');
$data = json_decode($input, true);


if (isset($data['punkty_druzyny'])) {
    $punkty_druzyny = $data['punkty_druzyny'];
} else {
    echo json_encode(["status" => "error", "message" => "Nie udało się pobrać punktów drużyn."]);
    return;
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