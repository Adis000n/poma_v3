function NazwyUpdate(nazwy_druzyny){
    document.getElementById("nazwa_druzny1").innerHTML = nazwy_druzyny[0];
    document.getElementById("nazwa_druzny2").innerHTML = nazwy_druzyny[1];
    document.getElementById("nazwa_druzny3").innerHTML = nazwy_druzyny[2];
    document.getElementById("nazwa_druzny4").innerHTML = nazwy_druzyny[3];
    console.log("Names updated successfully");
}