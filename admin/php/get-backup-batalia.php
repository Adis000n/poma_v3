<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: *");
header("Access-Control-Allow-Headers: *");
header('Access-Control-Allow-Credentials: true');
include "../../db_connect.php";

$batalia_data = getBackup_Batalia($conn);
echo json_encode($batalia_data);

function getBackup_Batalia($conn) {
    $result = mysqli_query($conn, "SELECT * FROM mvc_konkurs_batalia WHERE id=1");
    if ($result && mysqli_num_rows($result) > 0) {
        $row = mysqli_fetch_assoc($result); 
        return array(
            "kategoria" => $row["kategoria"],
            "poziom" => $row["poziom"],
            "nr_druzyny" => $row["nr_druzyny"],
            "img_odpowiedzi" => $row["img_odpowiedzi"],
            "img_pytania" => $row["img_pytania"],
            "media" => $row["media"],
            "media_typ" => $row["media_typ"],
            "stan" => $row["stan"]
        );
    }
    return null; 
}

?>
