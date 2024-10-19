const numer_druzyny_div = document.getElementById("numer_druzyny");
const punkty_div = document.getElementById("punkty");
const kategoria_div = document.getElementById("kategoria");
const pytanie_img = document.getElementById("pytanie-img");
const odpowiedz_img = document.getElementById("odpowiedz-img");
var pytanie_img_path;

initializeWebSocket('ws://localhost:3000/ws', (data) => {
    const message = JSON.parse(data);
    if (message.timer) {
        const timerStatus = message.timer;
        if (timerStatus === "start") {
            startTimer();
        } else if (timerStatus === "stop") {
            stopTimer();
        } else if (timerStatus === "reset") {
            stopTimer(); 
            resetTimer();
        }
    } else if (message.dane_pytanie) { 
        var pytanie = message.dane_pytanie; 
        showPytanie_data(pytanie);
        showPytanie_img(pytanie);
    }
    else if (message.is_answer_clicked){
        showOdpowiedz_img(pytanie_img_path)
    }
});


