function showCustomPytanie_data(pytanie_dane){
    numer_druzyny_div.innerHTML = pytanie_dane.numer_druzyny;
    kategoria_div.innerHTML = pytanie_dane.kategoria;
    punkty_div.innerHTML = pytanie_dane.poziom;
}

function showCustomPytanie_img(pytanie) {
    var imgPath = pytanie.img_pytania;
    var media_type = pytanie.media_typ;
    var mediaPath = pytanie.media;

    pytanie_img_path = imgPath;
    pytanie_img.src = `../${imgPath}`;

    pytanie_img.classList.remove("slide-in"); 
    void pytanie_img.offsetWidth; 
    pytanie_img.classList.add("slide-in");

    if (media_type === "audio") {
        audio_element.querySelector("source").src = `../${mediaPath}`;
        audio_element.load();
        audio_element.removeAttribute("hidden");
        audio_element.classList.remove( "slide-in"); 
        void audio_element.offsetWidth; 
        audio_element.classList.add("slide-in"); 
    } else if (media_type === "wideo") {
        wideo_element.querySelector("source").src = `../${mediaPath}`;
        wideo_element.load();
        wideo_element.removeAttribute("hidden");
        wideo_element.classList.remove("slide-in"); 
        void wideo_element.offsetWidth; 
        wideo_element.classList.add("slide-in"); 
    }
}



