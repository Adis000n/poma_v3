function showOdpowiedz_img(pytanie_path) {
    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var response = JSON.parse(xhr.responseText);
            var foundImage = response[0];  
            var imagePath = response[1];   
            var odpImg = foundImage ? imagePath : "grafika/Brak_odpowiedzi.jpg";
            var fullPath = `../${odpImg}`;
            odpowiedz_img.src = fullPath;
        }
    };

    xhr.open('GET', `php/wyswietlanie-img-odpowiedzi.php?pytanie_path=${pytanie_path}`, true);
    xhr.send();
}
