function showCustomAnswer(){
    var message = { is_custom_answer_clicked: true };
    sendMessage(JSON.stringify(message)); 
    createCustomWrongCorrectButtons();
    deleteCustomAnswerButton();
    clearInterval(timerInterval);
    setButtonState({ start: false, stop: true, reset: false });
    sendTimerMessage('stop');
}


function correctCustomAnswer(){
    Punkty_przesyl();
    updateStanToDone();
    deleteCustomWrongCorrectButtons();
    createCustomPytanieButton();
    clearPytanieButtons();
    if(STORED_DISABLE_TEAMS  && GLOBAL_ILOSC_DRUZYN != 0){
        disableBtnsForNotActiveTeams(parseInt(GLOBAL_ILOSC_DRUZYN));
    }
}
function wrongCustomAnswer(){
    updateStanToDone();
    deleteCustomWrongCorrectButtons();
    createCustomPytanieButton();
    clearPytanieButtons();
    if(STORED_DISABLE_TEAMS && GLOBAL_ILOSC_DRUZYN != 0){
        disableBtnsForNotActiveTeams(parseInt(GLOBAL_ILOSC_DRUZYN));
    }
}
