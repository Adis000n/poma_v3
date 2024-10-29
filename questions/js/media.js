function play_media() {
    if (audio_element.paused || audio_element.currentTime === 0) {
        audio_element.play();
    } else {
        audio_element.pause();
    }

    if (wideo_element.paused || wideo_element.currentTime === 0) {
        wideo_element.play();
    } else {
        wideo_element.pause();
    }
}
