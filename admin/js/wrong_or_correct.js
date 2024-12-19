function correctAnswer(){
    Punkty_przesyl();
    updateStanToDone();
    deleteWrongCorrectButtons();
    createPytanieButton();
    clearPytanieButtons();
    if(STORED_DISABLE_TEAMS){
        disableBtnsForNotActiveTeams(parseInt(GLOBAL_ILOSC_DRUZYN));
    }
}
function wrongAnswer(){
    updateStanToDone();
    deleteWrongCorrectButtons();
    createPytanieButton();
    clearPytanieButtons();
    if(STORED_DISABLE_TEAMS){
        disableBtnsForNotActiveTeams(parseInt(GLOBAL_ILOSC_DRUZYN));
    }
}

function updateStanToDone(){
    var xhr = new XMLHttpRequest();
    xhr.open('GET', `${STORED_PATH_TO_POMA}/admin/php/update-stan-done.php`, true);
    xhr.send();
}
