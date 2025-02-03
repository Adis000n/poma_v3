function displayWinningTeam(message) {
    
    const overlay = document.createElement('div');
    overlay.style.position = 'fixed';
    overlay.style.top = 0;
    overlay.style.left = 0;
    overlay.style.width = '100%';
    overlay.style.height = '100%';
    overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';  
    overlay.style.display = 'flex';
    overlay.style.justifyContent = 'center';
    overlay.style.alignItems = 'center';
    overlay.style.zIndex = '9999';

    const confettiGif = document.createElement('img');
    confettiGif.src = 'js/konfetti.gif';  
    confettiGif.alt = 'Confetti';
    confettiGif.style.position = 'absolute';  
    confettiGif.style.top = 0;
    confettiGif.style.left = 0;
    confettiGif.style.width = '100%';
    confettiGif.style.height = '100%';
    confettiGif.style.objectFit = 'cover';  
    confettiGif.style.zIndex = '1';  

    const container = document.createElement('div');
    container.style.display = 'flex';
    container.style.flexDirection = 'column';  
    container.style.alignItems = 'center';
    container.style.padding = '20px';
    container.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';  
    container.style.borderRadius = '10px';
    container.style.position = 'relative';  
    container.style.zIndex = '2';  

    const image = document.createElement('img');
    image.src = 'js/puchar.png';
    image.alt = 'Puchar';
    image.style.width = '650px'; 
    image.style.height = 'auto';  
    image.style.marginBottom = '20px'; 

    const textElement = document.createElement('div');
    textElement.textContent = `Zwycięska drużyna: ${message}`;
    textElement.style.color = 'white';
    textElement.style.fontSize = '4em';  
    textElement.style.textAlign = 'center';

    container.appendChild(image); 
    container.appendChild(textElement);  
    overlay.appendChild(container);
    overlay.appendChild(confettiGif);
    document.body.appendChild(overlay);

    const audioElement = new Audio('js/trabka.mp3');
    audioElement.play().catch(error => console.log("Autoodtwarzanie zablokowane:", error));

    setTimeout(() => {
        overlay.style.display = 'none';  
    }, 10000); 
}