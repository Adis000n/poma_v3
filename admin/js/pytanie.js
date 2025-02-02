function updateSubmitButtonState() {
    const submitButton = document.getElementById('submitButton');
    if (submitButton) {
        submitButton.disabled = !(Pytanie.kategoria && Pytanie.punkty && Pytanie.numerDruzyny);
        if (Pytanie.kategoria && Pytanie.punkty && Pytanie.numerDruzyny){
            submitButton.style.opacity = 1;
        }else{
            submitButton.style.opacity = 0.3;
        }
    }
}


function selectOption(selectedButton, typ) {
    const buttons = selectedButton.closest('.button-group').querySelectorAll('.btn');
    buttons.forEach(function(button) {
        button.classList.remove('checked');
        button.classList.add('unchecked');
    });

    selectedButton.classList.remove('unchecked');
    selectedButton.classList.add('checked');

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