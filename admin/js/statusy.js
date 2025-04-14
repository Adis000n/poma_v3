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

const serverDotContainer = document.getElementById('server-dot-container');
const serverPopover = document.getElementById('server-popover');

serverDotContainer.addEventListener('click', (e) => {
    serverPopover.style.display = serverPopover.style.display === 'block' ? 'none' : 'block';
});

document.addEventListener('click', (e) => {
    if (!serverDotContainer.contains(e.target)) {
        serverPopover.style.display = 'none';
    }
});

function server_status(status){
    const statusDot = document.getElementById('server-dot');
    if (status === true) {
        statusDot.classList.remove('inactive');
        statusDot.classList.add('active');
    } else {
        statusDot.classList.remove('active');
        statusDot.classList.add('inactive');
    }
    updateServerPopover(status);
}

// Update popover content when server status changes
function updateServerPopover(status) {
    // This function can be removed if not needed for other purposes
}

function updateConnectionStatuses(status) {
    const statusDot = document.getElementById('server-dot');
    const isAnyConnected = status.admin || status.board || status.questions || status.overtime;
    
    if (isAnyConnected) {
        statusDot.classList.remove('inactive');
        statusDot.classList.add('active');
    } else {
        statusDot.classList.remove('active');
        statusDot.classList.add('inactive');
    }

    // Update popover content
    const adminStatus = document.getElementById('admin-status');
    const boardStatus = document.getElementById('board-status');
    const questionsStatus = document.getElementById('questions-status');
    const overtimeStatus = document.getElementById('overtime-status');

    adminStatus.textContent = status.admin ? '✅' : '❌';
    boardStatus.textContent = status.board ? '✅' : '❌';
    overtimeStatus.textContent = status.overtime ? '✅' : '❌';
    questionsStatus.textContent = status.questions ? '✅' : '❌';

    if(status.questions){
        const message = { volumes: {tick: STORED_TICK_VOL,bell: STORED_BELL_VOL, powerup: STORED_POWERUP_1_VOL, powerup2:STORED_POWERUP_2_VOL,fail:STORED_FAIL_VOL,trabka: STORED_TRABKA_VOL} };
        sendMessage(JSON.stringify(message));
    }
    if(status.overtime){
        if(STORED_DISABLE_TEAMS){
            const button1 = document.getElementById('pointBtn1');
            const button3 = document.getElementById('pointBtn3');
            button1.disabled = true;
            button1.classList.toggle('disabled', true);
            button3.disabled = true;
            button3.classList.toggle('disabled', true);
        }
    }else{
        const button1 = document.getElementById('pointBtn1');
        const button3 = document.getElementById('pointBtn3');
        button1.disabled = false;
        button1.classList.toggle('disabled', false);
        button3.disabled = false;
        button3.classList.toggle('disabled', false);
    }
}