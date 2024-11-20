function backupAll(backup_data){
    switch(backup_data.stan){
        case "pytanie":
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
        break;
        case "odpowiedz":

        break;
        case "clear":
        clearAll();
        break;
    }
}