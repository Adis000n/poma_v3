function start_stop_media(){
    const message = { play_media: true }; 
    sendMessage(JSON.stringify(message));
}