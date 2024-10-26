function showPytanie_data(pytanie){
    numer_druzyny_div.innerHTML = pytanie.numerDruzyny;
    kategoria_div.innerHTML = pytanie.kategoria;
    punkty_div.innerHTML = pytanie.punkty;
}

function showPytanie_img(pytanie,audio_element,wideo_element) {
    var kategoria = pytanie.kategoria;
    var punkty = pytanie.punkty;
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var img_data = JSON.parse(xhr.responseText.trim()); 
            var imgPath = img_data[0];
            var media_type = img_data[1];
            var mediaPath = img_data[2];
            pytanie_img_path = imgPath;
            pytanie_img.src = `../${imgPath}`;
            if(media_type == "audio"){
                audio_element.querySelector("source").src = `../${mediaPath}`;
                audio_element.load();
            }
            else if(media_type == "wideo"){
                wideo_element.querySelector("source").src = `../${mediaPath}`;
                wideo_element.load();
            }
        }
    };
    xhr.open('GET', `php/wyswietlanie-img-pytania.php?kategoria=${kategoria}&punkty=${punkty}`, true);
    xhr.send();
}


