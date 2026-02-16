function showPytanie_data(pytanie_dane){
    numer_druzyny_div.innerHTML = pytanie_dane.numerDruzyny;
    kategoria_div.innerHTML = pytanie_dane.kategoria;
    punkty_div.innerHTML = pytanie_dane.punkty;
}

function showPytanie_img(pytanie) {
    var kategoria = pytanie.kategoria;
    var punkty = pytanie.punkty;
    var nr_druzyny = parseInt(pytanie.numerDruzyny);
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var img_data = JSON.parse(xhr.responseText.trim());
            var imgPath = img_data[0] === "Brak_znalezionych_obrazow" ? "grafika/Brak_pytania.jpg" : img_data[0];
            var media_type = img_data[1];
            var mediaPath = img_data[2];

            pytanie_img_path = imgPath;
            pytanie_img.src = `../${imgPath}`;

            pytanie_img.classList.remove("slide-in"); 
            void pytanie_img.offsetWidth; 
            pytanie_img.classList.add("slide-in");

            if (media_type === "audio") {
                audio_element.querySelector("source").src = `../${mediaPath}`;
                audio_element.volume = 0.25;
                audio_element.load();
                audio_element.removeAttribute("hidden");
                audio_element.classList.remove( "slide-in"); 
                void audio_element.offsetWidth; 
                audio_element.classList.add("slide-in"); 
            } else if (media_type === "wideo") {
                wideo_element.querySelector("source").src = `../${mediaPath}`;
                wideo_element.volume = 0.1; 
                wideo_element.load();
                wideo_element.removeAttribute("hidden");
                wideo_element.classList.remove("slide-in"); 
                void wideo_element.offsetWidth; 
                wideo_element.classList.add("slide-in"); 
            }
        }
    };
    xhr.open('GET', `php/wyswietlanie-img-pytania.php?kategoria=${kategoria}&punkty=${punkty}&nr_druzyny=${nr_druzyny}`, true);
    xhr.send();
}



