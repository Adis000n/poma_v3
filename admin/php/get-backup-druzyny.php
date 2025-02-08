<?php
include "../../db_connect.php";


$druzyny_data = getBackup_Druzyny($conn);
echo json_encode($druzyny_data);

function getBackup_Druzyny($conn) {
    $teams_result = mysqli_query($conn, "SELECT nazwa, punkty FROM mvc_konkurs_druzyny LIMIT 4");
    $count_result = mysqli_query($conn, "SELECT ilosc_druzyn FROM mvc_konkurs_batalia WHERE id = 1");
    
    $response = array();
    
    if ($teams_result && mysqli_num_rows($teams_result) > 0) {
        $response['teams'] = array();
        while ($row = mysqli_fetch_assoc($teams_result)) {
            $response['teams'][] = array(
                "nazwa" => $row["nazwa"],
                "punkty" => $row["punkty"]
            );
        }
    }
    
    if ($count_result && mysqli_num_rows($count_result) > 0) {
        $count_row = mysqli_fetch_assoc($count_result);
        $response['ilosc_druzyn'] = $count_row['ilosc_druzyn'];
    }
    
    return empty($response) ? null : $response;
}
?>
