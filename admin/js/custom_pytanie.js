let selectedCustomTeam = null;

function selectCustomOption(selectedButton, type) {
    const buttons = selectedButton.closest('.btn-group').querySelectorAll('.btn');
    buttons.forEach(function(button) {
        button.classList.remove('checked');
        button.classList.add('unchecked');
    });

    selectedButton.classList.remove('unchecked');
    selectedButton.classList.add('checked');
    selectedCustomTeam = selectedButton.value;

    updateCustomSubmitButtonState();
}

function submitCustomPytanie() {
    if(!SERVER_RUNNING) {
        showToast('warning', 'Serwer jest rozłączony. Nie można wysłać pytania.');
        return;
    }

    const pytanieId = document.getElementById('numer_pytania').value;
    var xhr22 = new XMLHttpRequest();
    xhr22.open('GET', `${STORED_PATH_TO_POMA}/questions/php/update_clear_db.php`, true);
    xhr22.send();
    var xhr31 = new XMLHttpRequest();
        xhr31.onreadystatechange = function () {
            if (xhr31.readyState === 4 && xhr31.status === 200) {
                var response = JSON.parse(xhr31.responseText);
                Pytanie.punkty = response.poziom;
                Pytanie.numerDruzyny = selectedCustomTeam;
                Pytanie.kategoria = response.kategoria;
                sendCustomPytanie(response);
                stopMedia(); 
                createCustomAnswerButton();
                deleteCustomPytanieButton();
                clearInterval(timerInterval);
                currentTime = 30;
                time.innerText = currentTime;
                setButtonState({ start: false, stop: true, reset: true });
                sendTimerMessage('reset');
            }
        };
        xhr31.open('GET', `${STORED_PATH_TO_POMA}/admin/php/get-custom-pytanie.php?pytanieId=${pytanieId}&numer_druzyny=${selectedCustomTeam}`, true); 
        xhr31.send(); 
}

function sendCustomPytanie(dane){
    dane.numer_druzyny = selectedCustomTeam;
    const message = { dane_custom_pytanie: dane }; 
    sendMessage(JSON.stringify(message));
}

function updateCustomSubmitButtonState() {
    const submitButton = document.getElementById('submitCustomButton');
    const pytanieId = document.getElementById('numer_pytania').value;
    
    const isValid = selectedCustomTeam !== null && pytanieId.trim() !== '';
    submitButton.disabled = !isValid;
    if (isValid){
        submitButton.style.opacity = 1
    } else{
        submitButton.style.opacity = 0.3
    }
}

document.getElementById('numer_pytania').addEventListener('input', updateCustomSubmitButtonState);