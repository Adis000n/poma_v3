function showOdpowiedz_img(pytanie_path) {
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

    xhr.open('GET', `php/wyswietlanie-img-odpowiedzi.php?pytanie_path=${pytanie_path}`, true);
    xhr.send();
}
