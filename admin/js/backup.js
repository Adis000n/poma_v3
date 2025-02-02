function schowajkolo(){
        let showWheele = false;
        const message = {wheele: showWheele};
        sendMessage(JSON.stringify(message));
}
const backupBtn = document.getElementById("backup_btn");
    backupBtn.addEventListener('click', () => {
        if(SERVER_RUNNING){
        schowajkolo(); // restart
        var xhr2 = new XMLHttpRequest();
        xhr2.onreadystatechange = function () {
            if (xhr2.readyState === 4 && xhr2.status === 200) {
                var response = JSON.parse(xhr2.responseText);
                send_backup_pytania(response);
            }
        };
        xhr2.open('GET', `${STORED_PATH_TO_POMA}/admin/php/get-backup-batalia.php`, true); 
        xhr2.send(); 
        var ilosc_druzyn;
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                var response = JSON.parse(xhr.responseText);
                ilosc_druzyn = response.ilosc_druzyn;
                GLOBAL_ILOSC_DRUZYN = ilosc_druzyn;
                if(STORED_DISABLE_TEAMS){
                    disableBtnsForNotActiveTeams(parseInt(ilosc_druzyn));
                }
                druzyny = response.teams
                    .slice(0, parseInt(ilosc_druzyn))
                    .map(team => team.nazwa);
                const message = { nazwy_druzyny: druzyny }; 
                sendMessage(JSON.stringify(message));

                tabela_punkty = response.teams.map(team => parseInt(team.punkty));
                wysylanie();
                updateDisplay();
            }
        };
        xhr.open('GET', `${STORED_PATH_TO_POMA}/admin/php/get-backup-druzyny.php`, true); 
        xhr.send();
        }
        else{
            showToast('warning', 'Serwer jest rozłączony. Nie można wykonać kopii zapasowej bazy danych.');
        }
    });


function send_backup_pytania(backup_data) {
    var message = { backup_data_to_pytania: backup_data };
    sendMessage(JSON.stringify(message));

    switch (backup_data.stan) {
        case "pytanie":
            clear_buttons_select_pytanie(backup_data);
            createAnswerButton();
            stopMedia();
            break;
        case "odpowiedz":
            clear_buttons_select_pytanie(backup_data);
            createWrongCorrectButtons();
            break;
        case "done":
            while (div_pytania.firstChild) {
                div_pytania.removeChild(div_pytania.firstChild);
            }
            createPytanieButton();
            break;
        case "clear":
            while (div_pytania.firstChild) {
                div_pytania.removeChild(div_pytania.firstChild);
            }
            createPytanieButton();
            clear_pytania();
            break;
    }
}


function clear_buttons_select_pytanie(backup_data){
    Pytanie.kategoria = backup_data.kategoria;
    Pytanie.punkty = backup_data.poziom;
    Pytanie.numerDruzyny = backup_data.nr_druzyny;
    while (div_pytania.firstChild) {
        div_pytania.removeChild(div_pytania.firstChild);
    }

    if (backup_data.kategoria) {
        const kategoriaButtons = document.querySelectorAll('.category-button');
        kategoriaButtons.forEach(button => {
            if (button.value.toLowerCase() === backup_data.kategoria.toLowerCase()) {
                selectOption(button, 'kategoria');
            }
        });
    }

    if (backup_data.poziom) {
        const punktyButtons = document.querySelectorAll('.points-button');
        const correctButton = Array.from(punktyButtons).find(button => 
            Number(button.value) === Number(backup_data.poziom)
        );

        if (correctButton) {
            selectOption(correctButton, 'punkty');
        }
    }

    if (backup_data.nr_druzyny) {
        const druzynyButtons = document.querySelectorAll('.team-button');
        const correctButton = Array.from(druzynyButtons).find(button => 
            Number(button.value) === Number(backup_data.nr_druzyny)
        );

        if (correctButton) {
            selectOption(correctButton, 'numerDruzyny');
        }
    }
}
