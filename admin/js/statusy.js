function set_audio_status(status) {
    const statusDot = document.getElementById('status-dot');
    if (status === true) {
        statusDot.classList.remove('inactive');
        statusDot.classList.add('active');
    } else {
        statusDot.classList.remove('active');
        statusDot.classList.add('inactive');
    }
}
message3 = { check_if_user_interacted: true }; 
    sendMessage(JSON.stringify(message3));


function server_status(status){
    const statusDot = document.getElementById('server-dot');
    if (status === true) {
        statusDot.classList.remove('inactive');
        statusDot.classList.add('active');
    } else {
        statusDot.classList.remove('active');
        statusDot.classList.add('inactive');
    }
}