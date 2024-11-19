function clear_pytania(){
    clearPytanieButtons();
    while (div_pytania.firstChild) {
        div_pytania.removeChild(div_pytania.firstChild);
    }
    createPytanieButton();
    const message = { clear_questions: true }; 
    sendMessage(JSON.stringify(message));
}