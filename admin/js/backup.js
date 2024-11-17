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



function send_backup_pytania(backup_data){
    var message = { backup_data_to_pytania: backup_data };
    sendMessage(JSON.stringify(message));
    switch(backup_data.stan){
        case "pytanie":

        break;
        case "odpowiedz":

        break;
        case "clear":
            
        break;
    }
}
