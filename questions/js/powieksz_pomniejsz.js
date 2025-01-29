var zdjecie = document.getElementById('pytanie-img');
var odpowiedz = document.getElementById('odpowiedz-img');
var wideo = document.getElementById('wideo');

function PowiekszZdj() {
    zdjecie.style.width = (zdjecie.offsetWidth * 1.03) + 'px'; 
    odpowiedz.style.width = (odpowiedz.offsetWidth * 1.03) + 'px'; 
    wideo.style.width = (wideo.offsetWidth * 1.03) + 'px'; 
}


function PomniejszZdj() {
    zdjecie.style.width = (zdjecie.offsetWidth * 0.97) + 'px'; 
    odpowiedz.style.width = (odpowiedz.offsetWidth * 0.97) + 'px';  
    wideo.style.width = (wideo.offsetWidth * 0.97) + 'px'; 
}