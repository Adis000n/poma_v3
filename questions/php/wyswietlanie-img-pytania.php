<?php
include "../../db_connect.php";

if (isset($_GET['kategoria']) && isset($_GET['punkty'])) {
    $kategoria = $_GET['kategoria'];
    $punkty = $_GET['punkty'];
    $img_data = getRandomImage($kategoria, $punkty,$conn);
    // updateState($conn,$kategoria,$punkty,$img_data);
    echo json_encode($img_data);
} else {
    echo "Invalid parameters";
}

function getRandomImage($kategoria, $punkty,$conn) {
    $result = mysqli_query($conn, "SELECT img_pytania, media,media_typ FROM mvc_konkurs_pytania WHERE kategoria='$kategoria' AND poziom=$punkty AND (YEAR(CURDATE())-rok_uzycia)>=5 ORDER BY RAND() LIMIT 1;");
    if ($result && mysqli_num_rows($result) > 0) {
        $row = mysqli_fetch_array($result);
        $imagePath = $row['img_pytania'];
        $media = $row['media'];
        $media_typ = $row['media_typ'];
        return array("$imagePath", "$media_typ","$media");
    }
    return "Brak_znalezionych_obrazow";
}

function updateState($conn,$kategoria,$punkty,$imagePath){
    $update_query = "UPDATE `mvc_konkurs_batalia` SET `img_pytania`=?, `stan`='pytanie',`media`='',`media_typ`='', `poziom`=?, `kategoria`=?, `img_odpowiedzi`='' WHERE `id`=1";
    $update_stmt = mysqli_prepare($conn, $update_query);
    if (!$update_stmt) {
        die("Error preparing update statement: " . mysqli_error($conn));
    }
    mysqli_stmt_bind_param($update_stmt, "sis", $imagePath, $punkty, $kategoria);
    if (!mysqli_stmt_execute($update_stmt)) {
        die("Error updating record: " . mysqli_stmt_error($update_stmt));
    }
    mysqli_stmt_close($update_stmt);
}
?>
