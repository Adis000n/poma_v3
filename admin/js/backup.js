const backupBtn = document.getElementById("backup_btn");

backupBtn.addEventListener('click', () => {
    var xhr2 = new XMLHttpRequest();
    xhr2.onreadystatechange = function () {
        if (xhr2.readyState === 4 && xhr2.status === 200) {
            var response = JSON.parse(xhr2.responseText);
            console.log(response); 
        }
    };
    xhr2.open('GET', 'http://localhost/poma_v5/poma_v3/admin/php/get-backup-batalia.php', true); 
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
