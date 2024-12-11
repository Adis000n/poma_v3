function NazwyUpdate(nazwy_druzyny) {
    if (nazwy_druzyny.length === 2) {
        document.getElementById("nazwa_druzny1").innerHTML = nazwy_druzyny[0];
        document.getElementById("nazwa_druzny2").innerHTML = nazwy_druzyny[1];
        document.getElementById("nazwa_druzny3").innerHTML = "-";
        document.getElementById("nazwa_druzny4").innerHTML = "-";
    } else if (nazwy_druzyny.length === 3) {
        document.getElementById("nazwa_druzny1").innerHTML = nazwy_druzyny[0];
        document.getElementById("nazwa_druzny2").innerHTML = nazwy_druzyny[1];
        document.getElementById("nazwa_druzny3").innerHTML = nazwy_druzyny[2];
        document.getElementById("nazwa_druzny4").innerHTML = "-";
    } else if (nazwy_druzyny.length === 4) {
        document.getElementById("nazwa_druzny1").innerHTML = nazwy_druzyny[0];
        document.getElementById("nazwa_druzny2").innerHTML = nazwy_druzyny[1];
        document.getElementById("nazwa_druzny3").innerHTML = nazwy_druzyny[2];
        document.getElementById("nazwa_druzny4").innerHTML = nazwy_druzyny[3];
    }

    // Resetowanie punktów na '-'
    document.getElementById("points1").innerHTML = '-';
    document.getElementById("points2").innerHTML = '-';
    document.getElementById("points3").innerHTML = '-';
    document.getElementById("points4").innerHTML = '-';

    console.log("Names and points updated successfully");
}
