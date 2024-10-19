function updateSubmitButtonState() {
    const submitButton = document.getElementById('submitButton');
    if (Pytanie.kategoria && Pytanie.punkty && Pytanie.numerDruzyny) {
        submitButton.disabled = false;
    } else {
        submitButton.disabled = true;
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
    const message = { dane_pytanie: Pytanie }; 
    sendMessage(JSON.stringify(message));
    createAnswerButton();
    deletePytanieButton();
}