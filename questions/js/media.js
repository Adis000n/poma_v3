function fadeIn(element, duration = 500) {
    element.volume = 0;
    element.play();
    
    let volume = 0;
    const fadeInterval = setInterval(() => {
        volume += 0.1;
        if (volume >= 1) {
            element.volume = 1;
            clearInterval(fadeInterval);
        } else {
            element.volume = volume;
        }
    }, duration / 10);
}

function fadeOut(element, duration = 500) {
    let volume = element.volume;
    const fadeInterval = setInterval(() => {
        volume -= 0.1;
        if (volume <= 0) {
            element.pause();
            element.volume = 1;
            clearInterval(fadeInterval);
        } else {
            element.volume = volume;
        }
    }, duration / 10);
}

function play_media() {
    if (audio_element.paused || audio_element.currentTime === 0) {
        fadeIn(audio_element, 1000); // 1000ms for smoother fade-in
    } else {
        fadeOut(audio_element, 1000); // 1000ms for smoother fade-out
    }

    if (wideo_element.paused || wideo_element.currentTime === 0) {
        fadeIn(wideo_element,1000)
    } else {
        fadeOut(wideo_element,1000)
    }
}
