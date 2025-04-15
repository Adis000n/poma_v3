let winButtonsOnCooldown = false;

function win1(){
    if (winButtonsOnCooldown) return;
    
    Swal.fire({
        title: 'Czy na pewno?',
        text: "Czy na pewno chcesz przyznać wygraną drużynie 1?",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Tak',
        cancelButtonText: 'Nie'
    }).then((result) => {
        if (result.isConfirmed) {
            // Disable win buttons
            setWinButtonsState(true);
            
            var teamName = druzyny[0];
            const message = { winningTeam: teamName };
            sendMessage(JSON.stringify(message));
            
            // Start cooldown timer
            startWinButtonsCooldown();
        }
    });
}

function win2(){
    if (winButtonsOnCooldown) return;
    
    Swal.fire({
        title: 'Czy na pewno?',
        text: "Czy na pewno chcesz przyznać wygraną drużynie 2?",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Tak',
        cancelButtonText: 'Nie'
    }).then((result) => {
        if (result.isConfirmed) {
            // Disable win buttons
            setWinButtonsState(true);
            
            var teamName = druzyny[1];
            const message = { winningTeam: teamName };
            sendMessage(JSON.stringify(message));
            
            // Start cooldown timer
            startWinButtonsCooldown();
        }
    });
}

function setWinButtonsState(disabled) {
    const winTeam1Button = document.getElementById('win-team1-button');
    const winTeam2Button = document.getElementById('win-team2-button');
    
    winTeam1Button.disabled = disabled;
    winTeam2Button.disabled = disabled;
    
    if (disabled) {
        winTeam1Button.classList.add('disabled');
        winTeam2Button.classList.add('disabled');
    } else {
        winTeam1Button.classList.remove('disabled');
        winTeam2Button.classList.remove('disabled');
    }
}

function startWinButtonsCooldown() {
    winButtonsOnCooldown = true;
    
    // Enable buttons after 5 seconds
    setTimeout(() => {
        winButtonsOnCooldown = false;
        setWinButtonsState(false);
    }, 5000);
}