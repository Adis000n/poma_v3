<?php
include "../../db_connect.php";
header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Methods: GET, POST");
header("Access-Control-Allow-Headers: Content-Type");
if (isset($_GET['pytanieId'])&& isset($_GET['numer_druzyny'])) {
    $pytanieId = $_GET['pytanieId'];
    $numer_druzyny  = $_GET['numer_druzyny'];
    $pytanie_data = getPytanie($conn,$pytanieId);
    updateState(
        $conn,
        $pytanie_data['kategoria'],
        $pytanie_data['poziom'],
        $numer_druzyny,
        $pytanie_data['img_pytania'],
        $pytanie_data['media'],
        $pytanie_data['media_typ']
    );
    echo json_encode($pytanie_data);
}

function getPytanie($conn,$pytanieId) {
    $pytanie_result = mysqli_query($conn, "SELECT img_pytania,kategoria,poziom,media,media_typ from mvc_konkurs_pytania where id=$pytanieId limit 1");
    $response = array();
    
    if ($pytanie_result && mysqli_num_rows($pytanie_result) > 0) {
        while ($row = mysqli_fetch_assoc($pytanie_result)) {
            $response = array(
                "img_pytania" => $row["img_pytania"],
                "kategoria" => $row["kategoria"],
                "poziom" => $row["poziom"],
                "media" => $row["media"],
                "media_typ" => $row["media_typ"]
            );
        }
    }
    
    return empty($response) ? null : $response;
}
function updateState($conn, $kategoria, $poziom, $nr_druzyny, $imgPath, $imgMedia, $imgType) {
    $update_query = "UPDATE `mvc_konkurs_batalia` 
                     SET `img_pytania`=?, `stan`='pytanie', `media`=?, `media_typ`=?, `poziom`=?, `kategoria`=?, `nr_druzyny`=?, `img_odpowiedzi`='' 
                     WHERE `id`=1";
    $update_stmt = mysqli_prepare($conn, $update_query);
    if (!$update_stmt) {
        die("Error preparing update statement: " . mysqli_error($conn));
    }
    mysqli_stmt_bind_param($update_stmt, "sssisi", $imgPath, $imgMedia, $imgType, $poziom, $kategoria, $nr_druzyny);
    if (!mysqli_stmt_execute($update_stmt)) {
        die("Error updating record: " . mysqli_stmt_error($update_stmt));
    }
    mysqli_stmt_close($update_stmt);
}
?>
