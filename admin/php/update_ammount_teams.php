<?php
header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Methods: GET, POST");
header("Access-Control-Allow-Headers: Content-Type");

include "../../db_connect.php";

$ilosc_druzyn = $_GET['ilosc_druzyn'];
$update_query = "UPDATE `mvc_konkurs_batalia` SET `Ilosc_druzyn` = ? WHERE `id`=1";
$update_stmt = mysqli_prepare($conn, $update_query);
if (!$update_stmt) {
    die("Error preparing update statement: " . mysqli_error($conn));
}
mysqli_stmt_bind_param($update_stmt, 'i', $ilosc_druzyn);
if (!mysqli_stmt_execute($update_stmt)) {
    die("Error updating record: " . mysqli_stmt_error($update_stmt));
}
mysqli_stmt_close($update_stmt);
?>
