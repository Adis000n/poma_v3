function backupAll(backup_data){
    switch(backup_data.stan){
        case "pytanie":
        displayPytanie(backup_data);
        break;
        case "odpowiedz":
        displayPytanie(backup_data);
        showOdpowiedz_img(pytanie_img_path);
        break;
        case "done":
        displayPytanie(backup_data);
        showOdpowiedz_img_done(pytanie_img_path);
        break;
        case "clear":
        clearAll();
        break;
    }
}


function displayPytanie(backup_data){
    showPytanie_data({kategoria:backup_data.kategoria,punkty:backup_data.poziom,numerDruzyny:backup_data.nr_druzyny});
    pytanie_img_path = backup_data.img_pytania;
    pytanie_img.src = `../${backup_data.img_pytania}`;

    pytanie_img.classList.remove("slide-in"); 
    void pytanie_img.offsetWidth; 
    pytanie_img.classList.add("slide-in");
    if(backup_data.media_typ == "wideo"){
        wideo_element.querySelector("source").src = `../${backup_data.media}`;
        wideo_element.load();
        wideo_element.removeAttribute("hidden");
        wideo_element.classList.remove("slide-in"); 
        void wideo_element.offsetWidth; 
        wideo_element.classList.add("slide-in"); 
    } else if(backup_data.media_typ == "audio"){
        audio_element.querySelector("source").src = `../${backup_data.media}`;
        audio_element.load();
        audio_element.removeAttribute("hidden");
        audio_element.classList.remove( "slide-in"); 
        void audio_element.offsetWidth; 
        audio_element.classList.add("slide-in"); 
    }
}



function showOdpowiedz_img_done(pytanie_path) {
    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var response = JSON.parse(xhr.responseText);
            var foundImage = response[0];  
            var imagePath = response[1];   
            var odpImg = foundImage ? imagePath : "grafika/Brak_odpowiedzi.jpg";
            odpowiedz_img.src = `../${odpImg}`;
            odpowiedz_img.classList.remove("slide-in"); 
            void odpowiedz_img.offsetWidth; 
            odpowiedz_img.classList.add("slide-in"); 
        }
    };

    xhr.open('GET', `php/wyswietlanie-img-odpowiedzi-done.php?pytanie_path=${pytanie_path}`, true);
    xhr.send();
}
