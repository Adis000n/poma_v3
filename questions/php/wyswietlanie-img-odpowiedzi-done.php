<?php
include "../../db_connect.php";

if (isset($_GET['pytanie_path'])) {
    $pytanie_path = $_GET['pytanie_path'];
    $imageOdpPath = getImage($pytanie_path, $conn);
    updateState($conn, $imageOdpPath);

    // Return an array: [status, path]
    echo json_encode(array($imageOdpPath !== "Brak_znalezionych_obrazow", $imageOdpPath));
} else {
    echo json_encode(array(false, "Invalid parameters"));
}

function getImage($pytanie_path, $conn) {
    $result = mysqli_query($conn, "SELECT img_odpowiedzi FROM mvc_konkurs_pytania WHERE img_pytania='$pytanie_path' LIMIT 1;");
    if ($result && mysqli_num_rows($result) > 0) {
        $row = mysqli_fetch_array($result);
        return $row['img_odpowiedzi'];
    }
    return "Brak_znalezionych_obrazow";
}

function updateState($conn, $imageOdpPath) {
    $update_query = "UPDATE `mvc_konkurs_batalia` SET `img_odpowiedzi`=?, `stan`='done' WHERE `id`=1";
    $update_stmt = mysqli_prepare($conn, $update_query);
    if (!$update_stmt) {
        die("Error preparing update statement: " . mysqli_error($conn));
    }
    mysqli_stmt_bind_param($update_stmt, "s", $imageOdpPath);
    if (!mysqli_stmt_execute($update_stmt)) {
        die("Error updating record: " . mysqli_stmt_error($update_stmt));
    }
    mysqli_stmt_close($update_stmt);
}
?>
