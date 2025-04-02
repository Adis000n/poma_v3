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
user_interacted = false;
clearUserInteracted();

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
    else if(message.check_if_user_interacted){
            const message = { audio_status: user_interacted }; 
            sendMessage(JSON.stringify(message));
    }
    else if(message.booster){
        if(message.booster == 1){
            const booster = "Podpowiedź publiczności";
            pokazBooster(booster);
        } else if(message.booster == 2){
            const booster = "+1 Punkt";
            pokazBooster(booster);
        } else if(message.booster == 3){
            const booster = "Pytanie za 3 punkty";
            pokazBooster(booster);
        } else if(message.booster == 4){
            const booster = "Wybór kategorii";
            pokazBooster(booster)
        } else if(message.booster == 5){
            const booster = "Dodatkowy czas";
            pokazBooster(booster);
        } else if (message.booster == 6){
            const booster = "Utrata kolejki";
            pokazBooster(booster);
        }
        
    }
    else if(message.wheele){
        if(message.wheele == true){
            showBoostersWheele()
        }
        if(message.wheele == false){
            toggleOverlay(false)
        }
    }
    else if(message.dane_custom_pytanie){
        var customPytanie = message.dane_custom_pytanie; 
        clearAllCustom();
        pytanie_loader.removeAttribute("hidden");
        setTimeout(() => {
            pytanie_loader.setAttribute("hidden", true);
            console.log(customPytanie);
            showCustomPytanie_img(customPytanie);
            showCustomPytanie_data(customPytanie);
        }, "1000");
    }
    else if (message.is_custom_answer_clicked){
        showOdpowiedz_img(pytanie_img_path)
    }else if(message.powieksz){
        PowiekszZdj();
    }else if(message.pomniejsz){
        PomniejszZdj();
    }
    else if(message.winningTeam){
        displayWinningTeam(message.winningTeam);
    }
});


