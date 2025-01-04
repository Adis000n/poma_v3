function NazwyUpdate(nazwy_druzyny) {
    Array.from({length: 4}, (_, i) => {
        const teamName = nazwy_druzyny[i] || "-";
        document.getElementById(`nazwa_druzny${i+1}`).innerHTML = teamName;
    });

    // Resetowanie punktów na '-'
    document.getElementById("points1").innerHTML = '-';
    document.getElementById("points2").innerHTML = '-';
    document.getElementById("points3").innerHTML = '-';
    document.getElementById("points4").innerHTML = '-';

}
