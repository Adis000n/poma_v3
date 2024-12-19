initializeWebSocket('ws://localhost:3000/ws', (data) => {
    const message = JSON.parse(data);
    if (message.audio_status !== undefined) {
            set_audio_status(message.audio_status);
    }
});

var Pytanie = {
    kategoria: '',
    punkty: 0,
    numerDruzyny: 0
};

var div_pytania = document.getElementById("pytanie_all_buttons");
var pytanie_button,answer_button,correct_button,wrong_button;
createPytanieButton();

function createPytanieButton(){
    pytanie_button = document.createElement('button');
    pytanie_button.id = "submitButton";
    pytanie_button.type = "button";
    pytanie_button.className = "btn btn-primary";
    pytanie_button.innerHTML = "Wyświetl pytanie";
    pytanie_button.disabled = true;
    pytanie_button.setAttribute("onclick", "submitPytanie()");
    div_pytania.appendChild(pytanie_button);
}
function createAnswerButton(){
    answer_button = document.createElement('button');
    answer_button.id = "answerButton";
    answer_button.type = "button";
    answer_button.className = "btn btn-secondary";
    answer_button.innerHTML = "Wyświetl odpowiedź";
    answer_button.setAttribute("onclick", "showAnswer()");
    div_pytania.appendChild(answer_button);
}
function createWrongCorrectButtons(){
    correct_button = document.createElement('button');
    correct_button.id = "correctAnswerButton";
    correct_button.type = "button";
    correct_button.className = "btn btn-success";
    correct_button.innerHTML = "Poprawna Odpowiedź";
    correct_button.setAttribute("onclick", "correctAnswer()");
        div_pytania.appendChild(correct_button);
    wrong_button = document.createElement('button');
    wrong_button.id = "wrongAnswerButton";
    wrong_button.type = "button";
    wrong_button.className = "btn btn-danger";
    wrong_button.innerHTML = "Zła Odpowiedź";
    wrong_button.setAttribute("onclick", "wrongAnswer()");
    div_pytania.appendChild(wrong_button);
}

function deletePytanieButton(){
    div_pytania.removeChild(pytanie_button);
}
function deleteAnswerButton(){
    div_pytania.removeChild(answer_button);
}
function deleteWrongCorrectButtons(){
    div_pytania.removeChild(correct_button);
    div_pytania.removeChild(wrong_button);
}

function clearPytanieButtons(){
    const allButtons = document.querySelectorAll('.btn-group .btn');
    allButtons.forEach(function(button) {
        button.classList.remove('btn-primary');
        button.classList.add('btn-outline-primary');
    });
    Pytanie.kategoria = '';
    Pytanie.punkty = 0;
    Pytanie.numerDruzyny = 0;
}

async function disableBtnsForNotActiveTeams(liczba_druzyn) {
    liczba_druzyn = parseInt(liczba_druzyn);
    
    await new Promise(resolve => setTimeout(resolve, 0));

    const teams = [3, 4];
    for (const teamNumber of teams) {
        const button = document.getElementById(`team${teamNumber}`);
        const isDisabled = teamNumber > liczba_druzyn;
        
        if (button) {
            button.disabled = isDisabled;
            button.classList.toggle('disabled', isDisabled);
        }

        const teamContainer = document.querySelector(`#teams .team-container:nth-child(${teamNumber})`);
        if (teamContainer) {
            await handleTeamContainer(teamContainer, isDisabled);
        }
    }
}

async function handleTeamContainer(container, isDisabled) {
    await new Promise(resolve => {
        requestAnimationFrame(async () => {
            container.style.position = 'relative';
            container.style.opacity = isDisabled ? '0.7' : '1';

            let overlay = container.querySelector('.team-overlay');
            if (isDisabled && !overlay) {
                overlay = document.createElement('div');
                overlay.className = 'team-overlay';
                overlay.innerHTML = '<i class="fas fa-lock"></i>';
                container.appendChild(overlay);
            } else if (!isDisabled && overlay) {
                overlay.remove();
            }

            const teamNum = Array.from(container.parentElement.children).indexOf(container) + 1;
            const teamInput = document.getElementById(`team_points_${teamNum}`);
            if (teamInput) {
                teamInput.disabled = isDisabled;
            }

            const teamButtons = container.querySelector('.team-buttons');
            if (teamButtons) {
                Array.from(teamButtons.getElementsByTagName('button')).forEach(button => {
                    button.disabled = isDisabled;
                });
            }
            resolve();
        });
    });
}