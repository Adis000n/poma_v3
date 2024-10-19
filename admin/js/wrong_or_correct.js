function correctAnswer(){
    //przesyłanie zmienionnych wartości punktów do planszy
    console.log(Pytanie.numerDruzynym, Pytanie.punkty ); // tutaj jest numer Druzyny i punkty z tego pytania, póżniej uzunąć tą linijkę
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
