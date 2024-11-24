function correctAnswer(){
    Punkty_przesyl();
    updateStanToDone();
    deleteWrongCorrectButtons();
    createPytanieButton();
    clearPytanieButtons();
}
function wrongAnswer(){
    updateStanToDone();
    deleteWrongCorrectButtons();
    createPytanieButton();
    clearPytanieButtons();
}

function updateStanToDone(){
    var xhr = new XMLHttpRequest();
    xhr.open('GET', `http://localhost/projekty/poma_v3/admin/php/update-stan-done.php`, true);
    xhr.send();
}
