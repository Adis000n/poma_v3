<?php
include "../../db_connect.php";
header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Methods: GET, POST");
header("Access-Control-Allow-Headers: Content-Type");

$druzyny_data = getBackup_Druzyny($conn);
echo json_encode($druzyny_data);

function getBackup_Druzyny($conn) {
    $result = mysqli_query($conn, "SELECT nazwa, punkty FROM mvc_konkurs_druzyny LIMIT 4");
    if ($result && mysqli_num_rows($result) > 0) {
        $data_to_return = array();
        while ($row = mysqli_fetch_assoc($result)) {
            $data_to_return[] = array(
                "nazwa" => $row["nazwa"],
                "punkty" => $row["punkty"]
            );
        }
        return $data_to_return; 
    }
    return null; 
}
?>
