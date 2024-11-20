numer_druzyny_div = document.getElementById("numer_druzyny");
punkty_div = document.getElementById("punkty");
kategoria_div = document.getElementById("kategoria");
pytanie_img = document.getElementById("pytanie-img");
odpowiedz_img = document.getElementById("odpowiedz-img");
audio_element = document.getElementById("audio");
wideo_element = document.getElementById("wideo");
pytanie_loader = document.getElementById("pytanie-loader");
var pytanie_img_path;
audio_element.setAttribute("hidden", true);
wideo_element.setAttribute("hidden", true);
pytanie_loader.setAttribute("hidden", true);
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
        } else if (timerStatus === "add"){
            addTimer();
        }
    } else if (message.dane_pytanie) { 
        var pytanie = message.dane_pytanie; 
        clearAll();
        pytanie_loader.removeAttribute("hidden");
        setTimeout(() => {
            pytanie_loader.setAttribute("hidden", true);
            showPytanie_img(pytanie);
            showPytanie_data(pytanie);
        }, "1000");
    }
    else if (message.is_answer_clicked){
        showOdpowiedz_img(pytanie_img_path)
    }
    else if(message.clear_questions){
        clearAll();
    }
    else if(message.play_media){
        play_media();
    }
    else if(message.backup_data_to_pytania){
        var backup_data = message.backup_data_to_pytania;
        backupAll(backup_data);
    }
});


