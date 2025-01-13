function correctAnswer(){
    Punkty_przesyl();
    updateStanToDone();
    deleteWrongCorrectButtons();
    createPytanieButton();
    clearPytanieButtons();
    if(STORED_DISABLE_TEAMS  && GLOBAL_ILOSC_DRUZYN != 0){
        disableBtnsForNotActiveTeams(parseInt(GLOBAL_ILOSC_DRUZYN));
    }
}
function wrongAnswer(){
    updateStanToDone();
    deleteWrongCorrectButtons();
    createPytanieButton();
    clearPytanieButtons();
    if(STORED_DISABLE_TEAMS && GLOBAL_ILOSC_DRUZYN != 0){
        disableBtnsForNotActiveTeams(parseInt(GLOBAL_ILOSC_DRUZYN));
    }
}

function updateStanToDone(){
    if(SERVER_RUNNING){
        var xhr = new XMLHttpRequest();
        xhr.open('GET', `${STORED_PATH_TO_POMA}/admin/php/update-stan-done.php`, true);
        xhr.send();
    } else {
        showToast('warning', 'Serwer jest rozłączony. Nie można zaktualizować stanu.');
    }
}
