function updateSubmitButtonState() {
    const submitButton = document.getElementById('submitButton');
    if (submitButton) {
        submitButton.disabled = !(Pytanie.kategoria && Pytanie.punkty && Pytanie.numerDruzyny);
    }
}


function selectOption(selectedButton, typ) {
    const buttons = selectedButton.closest('.btn-group').querySelectorAll('.btn');
    buttons.forEach(function(button) {
        button.classList.remove('btn-primary');
        button.classList.add('btn-outline-primary');
    });

    selectedButton.classList.remove('btn-outline-primary');
    selectedButton.classList.add('btn-primary');

    Pytanie[typ] = selectedButton.value;

    updateSubmitButtonState();
}

function submitPytanie() {
    stopMedia(); 
    const message = { dane_pytanie: Pytanie }; 
    sendMessage(JSON.stringify(message));
    createAnswerButton();
    deletePytanieButton();
    clearInterval(timerInterval);
    currentTime = 30;
    time.innerText = currentTime;
    setButtonState({ start: false, stop: true, reset: true });
    sendTimerMessage('reset');
}