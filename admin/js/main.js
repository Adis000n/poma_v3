const WS_URL = 'ws://localhost:3000/ws';

initializeWebSocket(WS_URL, (message) => {
    console.log('Received:', message);
});

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
    console.log("Tworze przycisk do odp");
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