const backupBtn = document.getElementById("backup_btn");
backupBtn.addEventListener('click', () => {
    var xhr2 = new XMLHttpRequest();
    xhr2.onreadystatechange = function () {
        if (xhr2.readyState === 4 && xhr2.status === 200) {
            var response = JSON.parse(xhr2.responseText);
            send_backup_pytania(response);
        }
    };
    xhr2.open('GET', 'http://localhost/projekty/poma_v3/admin/php/get-backup-batalia.php', true); 
    xhr2.send(); 

    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var response = JSON.parse(xhr.responseText);
            console.log(response); 
        }
    };
    xhr.open('GET', 'http://localhost/projekty/poma_v3/admin/php/get-backup-druzyny.php', true); 
    xhr.send();
});



function send_backup_pytania(backup_data) {
    var message = { backup_data_to_pytania: backup_data };
    sendMessage(JSON.stringify(message));

    switch (backup_data.stan) {
        case "pytanie":
            while (div_pytania.firstChild) {
                div_pytania.removeChild(div_pytania.firstChild);
            }

            if (backup_data.kategoria) {
                const kategoriaButtons = document.querySelectorAll('.btn-group[aria-label="Kategoria buttons"] .btn');
                kategoriaButtons.forEach(button => {
                    if (button.textContent.trim().toLowerCase() === backup_data.kategoria.toLowerCase()) {
                        selectOption(button, 'kategoria');
                    }
                });
            }

            if (backup_data.poziom) {
                const punktyButtons = document.querySelectorAll('.btn-group[aria-label="Punkty buttons"] .btn');
                const correctButton = Array.from(punktyButtons).find(button => 
                    Number(button.textContent.trim()) === Number(backup_data.poziom)
                );

                if (correctButton) {
                    selectOption(correctButton, 'punkty');
                }
            }

            if (backup_data.nr_druzyny) {
                const druzynyButtons = document.querySelectorAll('.btn-group[aria-label="Numer Druzyny buttons"] .btn');
                const correctButton = Array.from(druzynyButtons).find(button => 
                    Number(button.textContent.trim()) === Number(backup_data.nr_druzyny)
                );

                if (correctButton) {
                    selectOption(correctButton, 'numerDruzyny');
                }
            }

            createAnswerButton();
            break;

        case "odpowiedz":
            break;
        case "clear":
            clear_pytania();
            break;
    }
}
