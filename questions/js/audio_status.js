document.addEventListener('click', function() {
    if (!user_interacted) {
        user_interacted = true;
        const message = { audio_status: user_interacted }; 
        sendMessage(JSON.stringify(message));
    }
});

function clearUserInteracted() {
    user_interacted = false;
    const message = { audio_status: user_interacted }; 
    sendMessage(JSON.stringify(message));
}