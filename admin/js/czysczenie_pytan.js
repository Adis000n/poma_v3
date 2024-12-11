function clear_pytania(){
    clearPytanieButtons();
    while (div_pytania.firstChild) {
        div_pytania.removeChild(div_pytania.firstChild);
    }
    createPytanieButton();
    const message = { clear_questions: true }; 
    sendMessage(JSON.stringify(message));
    clearInterval(timerInterval);
    currentTime = 30;
    time.innerText = currentTime;
    setButtonState({ start: false, stop: true, reset: true });
    sendTimerMessage('reset');
    stopMedia();
}