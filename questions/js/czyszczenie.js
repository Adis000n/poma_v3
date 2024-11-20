function clearAll(){
    resetTimer();
    update_status_to_clear();
    numer_druzyny_div.innerHTML = "-";
    punkty_div.innerHTML = "-";
    kategoria_div.innerHTML = "-";
    pytanie_img.src = "";
    odpowiedz_img.src = "";
    audio_element.querySelector("source").src = "";
    audio_element.load();
    audio_element.setAttribute("hidden", true);
    wideo_element.querySelector("source").src = "";
    wideo_element.load();
    wideo_element.setAttribute("hidden", true);
}

function update_status_to_clear(){
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://localhost/projekty/poma_v3/questions/php/update_clear_db.php', true);
    xhr.send();
    
}