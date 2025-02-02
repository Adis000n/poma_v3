// Make isPlaying accessible globally
window.isPlaying = false;

function stopMedia() {
    isPlaying = false;
    const mediaButton = document.getElementById('mediaButton');
    mediaButton.innerHTML = "Play Media";
    mediaButton.classList.remove('stop');
    mediaButton.classList.add('play');
}

function start_stop_media(){
    isPlaying = !isPlaying;
    const mediaButton = document.getElementById('mediaButton');
    
    if (isPlaying) {
        mediaButton.innerHTML = "Stop Media";
        mediaButton.classList.remove('play');
        mediaButton.classList.add('stop');
    } else {
        mediaButton.innerHTML = "Play Media ";
        mediaButton.classList.remove('stop');
        mediaButton.classList.add('play');
    }

    const message = { play_media: true }; 
    sendMessage(JSON.stringify(message));
}