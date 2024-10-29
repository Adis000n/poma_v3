function clearAll(){
    resetTimer();
    numer_druzyny_div.innerHTML = "-";
    punkty_div.innerHTML = "-";
    kategoria_div.innerHTML = "-";
    pytanie_img.src = "";
    odpowiedz_img.src = "";
    audio_element.querySelector("source").src = "";
    audio_element.load();
    wideo_element.querySelector("source").src = "";
    wideo_element.load();
}