<?php
include "../../db_connect.php";

if (isset($_GET['kategoria']) && isset($_GET['punkty'])&& isset($_GET['nr_druzyny'])) {
    $kategoria = $_GET['kategoria'];
    $punkty = $_GET['punkty'];
    $nr_druzyny = $_GET['nr_druzyny'];
    $img_data = getRandomImage($kategoria, $punkty,$conn);
    updateState($conn,$kategoria,$punkty,$nr_druzyny,$img_data[0],$img_data[2],$img_data[1]);
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

function updateState($conn, $kategoria, $punkty, $nr_druzyny, $imgPath,$imgMedia,$imgType){
    $update_query = "UPDATE `mvc_konkurs_batalia` 
                     SET `img_pytania`=?, `stan`='pytanie', `media`=?, `media_typ`=?, `poziom`=?, `kategoria`=?, `nr_druzyny`=?, `img_odpowiedzi`='' 
                     WHERE `id`=1";
    $update_stmt = mysqli_prepare($conn, $update_query);
    if (!$update_stmt) {
        die("Error preparing update statement: " . mysqli_error($conn));
    }
    mysqli_stmt_bind_param($update_stmt, "sssisi", $imgPath, $imgMedia, $imgType, $punkty, $kategoria, $nr_druzyny);
    if (!mysqli_stmt_execute($update_stmt)) {
        die("Error updating record: " . mysqli_stmt_error($update_stmt));
    }
    mysqli_stmt_close($update_stmt);
}

?>
