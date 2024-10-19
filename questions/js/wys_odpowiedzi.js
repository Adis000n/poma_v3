function showOdpowiedz_img(pytanie_path){
    var xhr = new XMLHttpRequest();
    
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var imagePath = xhr.responseText.trim(); 
            console.log(`Wszystko jest git: ${imagePath}`)
            var fullPath = `../${imagePath}`;
            odpowiedz_img.src = fullPath;
        }
    };
    xhr.open('GET', `php/wyswietlanie-img-odpowiedzi.php?pytanie_path=${pytanie_path}`, true);
    xhr.send();
}