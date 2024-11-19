function correctAnswer(){
    Punkty_przesyl();
    const message = { is_correct: true }; 
    sendMessage(JSON.stringify(message));
    deleteWrongCorrectButtons();
    createPytanieButton();
    clearPytanieButtons();
}
function wrongAnswer(){
    const message = { is_correct: false }; 
    sendMessage(JSON.stringify(message));
    deleteWrongCorrectButtons();
    createPytanieButton();
    clearPytanieButtons();
}
