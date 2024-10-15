function showPytanie_data(pytanie){
    numer_druzyny_div.innerHTML = pytanie.numerDruzyny;
    kategoria_div.innerHTML = pytanie.kategoria;
    punkty_div.innerHTML = pytanie.punkty;
}

function showPytanie_img(pytanie) {
    var kategoria = pytanie.kategoria;
    var punkty = pytanie.punkty;
    var xhr = new XMLHttpRequest();
    
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var imagePath = xhr.responseText.trim(); 
            var fullPath = `../${imagePath}`;
            console.log(imagePath);
            var imageElement = document.getElementById('pytanie-img'); 
            imageElement.src = fullPath;
        }
    };
    

    xhr.open('GET', `php/wyswietlanie-img-pytania.php?kategoria=${kategoria}&punkty=${punkty}`, true);
    xhr.send();
    
}


