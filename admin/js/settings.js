const settingsDiv = document.getElementById('settings');
const settingsBtn = document.getElementById('settings_btn');
const closeBtn = document.getElementById('close-settings');
const resetBtn2 = document.getElementById('reset-settings');
const pathInput = document.getElementById('path-input');
const sweetAlertToggle = document.getElementById('sweetalert-toggle');
const teamsToggle = document.getElementById('teams-toggle');
const pointsAutomatToggle = document.getElementById('points-automat-toggle');
const volumeInputs = document.querySelectorAll('#volumes input[type="range"]');
const volumeValueDisplays = document.querySelectorAll('#volumes .volume-value');

settingsDiv.style.display = 'none';

STORED_PATH_TO_POMA = '';
STORED_USE_SWEETALERT = true;
STORED_DISABLE_TEAMS = true;
STORED_POINTS_AUTOMAT = true;
// Volume stored values
STORED_TICK_VOL = 0.25;
STORED_BELL_VOL = 1;
STORED_POWERUP_1_VOL = 1;
STORED_POWERUP_2_VOL = 0.9;
STORED_FAIL_VOL = 0.35;
STORED_TRABKA_VOL = 1;

function loadSettings() {
    const storedPath = localStorage.getItem('pomaPath') || PATH_TO_POMA;
    const storedSweetAlert = localStorage.getItem('useSweetAlert') ? 
        localStorage.getItem('useSweetAlert') === 'true' : USE_SWEETALERT;
    const storedTeams = localStorage.getItem('disableTeams') ? 
        localStorage.getItem('disableTeams') === 'true' : DISABLE_TEAMS;
    const storedPointsAutomat = localStorage.getItem('pointsAutomat') ? 
        localStorage.getItem('pointsAutomat') === 'true' : POINTS_AUTOMAT;

    pathInput.value = storedPath;
    sweetAlertToggle.checked = storedSweetAlert;
    teamsToggle.checked = storedTeams;
    pointsAutomatToggle.checked = storedPointsAutomat;

    STORED_PATH_TO_POMA = storedPath;
    STORED_USE_SWEETALERT = storedSweetAlert;
    STORED_DISABLE_TEAMS = storedTeams;
    STORED_POINTS_AUTOMAT = storedPointsAutomat;
    
    // Load volume settings
    loadVolumeSettings();
}

function loadVolumeSettings() {
    // Get volume inputs by name
    const tickVolume = document.querySelector('#volumes input[name="tick"]');
    const bellVolume = document.querySelector('#volumes input[name="bell"]');
    const powerup1Volume = document.querySelector('#volumes input[name="powerup_los"]');
    const powerup2Volume = document.querySelector('#volumes input[name="powerup_ok"]');
    const failVolume = document.querySelector('#volumes input[name="powerup_bad"]');
    const trabkaVolume = document.querySelector('#volumes input[name="trabka"]');
    
    // Load values from localStorage or use defaults from setup_variables.js
    const storedTickVol = localStorage.getItem('tickVolume') !== null ? 
        parseFloat(localStorage.getItem('tickVolume')) : TICK_VOL;
    const storedBellVol = localStorage.getItem('bellVolume') !== null ? 
        parseFloat(localStorage.getItem('bellVolume')) : BELL_VOL;
    const storedPowerup1Vol = localStorage.getItem('powerup1Volume') !== null ? 
        parseFloat(localStorage.getItem('powerup1Volume')) : POWERUP_1_VOL;
    const storedPowerup2Vol = localStorage.getItem('powerup2Volume') !== null ? 
        parseFloat(localStorage.getItem('powerup2Volume')) : POWERUP_2_VOL;
    const storedFailVol = localStorage.getItem('failVolume') !== null ? 
        parseFloat(localStorage.getItem('failVolume')) : FAIL_VOL;
    const storedTrabkaVol = localStorage.getItem('trabkaVolume') !== null ? 
        parseFloat(localStorage.getItem('trabkaVolume')) : TRABKA_VOL;
    
    // Set values to input elements
    tickVolume.value = storedTickVol;
    bellVolume.value = storedBellVol;
    powerup1Volume.value = storedPowerup1Vol;
    powerup2Volume.value = storedPowerup2Vol;
    failVolume.value = storedFailVol;
    trabkaVolume.value = storedTrabkaVol;
    
    // Update stored values
    STORED_TICK_VOL = storedTickVol;
    STORED_BELL_VOL = storedBellVol;
    STORED_POWERUP_1_VOL = storedPowerup1Vol;
    STORED_POWERUP_2_VOL = storedPowerup2Vol;
    STORED_FAIL_VOL = storedFailVol;
    STORED_TRABKA_VOL = storedTrabkaVol;
    
    // Update volume value displays
    updateVolumeDisplays();
}

function updateVolumeDisplays() {
    // Update each volume value display
    document.getElementById('tick-value').textContent = STORED_TICK_VOL.toFixed(2);
    document.getElementById('bell-value').textContent = STORED_BELL_VOL.toFixed(2);
    document.getElementById('powerup-los-value').textContent = STORED_POWERUP_1_VOL.toFixed(2);
    document.getElementById('powerup-ok-value').textContent = STORED_POWERUP_2_VOL.toFixed(2);
    document.getElementById('powerup-bad-value').textContent = STORED_FAIL_VOL.toFixed(2);
    document.getElementById('trabka-value').textContent = STORED_TRABKA_VOL.toFixed(2);
}

function saveSettings() {
    localStorage.setItem('pomaPath', pathInput.value);
    localStorage.setItem('useSweetAlert', sweetAlertToggle.checked);
    localStorage.setItem('disableTeams', teamsToggle.checked);
    localStorage.setItem('pointsAutomat', pointsAutomatToggle.checked);
    
    STORED_PATH_TO_POMA = pathInput.value;
    STORED_USE_SWEETALERT = sweetAlertToggle.checked;
    STORED_DISABLE_TEAMS = teamsToggle.checked;
    STORED_POINTS_AUTOMAT = pointsAutomatToggle.checked;
    
    // Save volume settings
    saveVolumeSettings();
}

function saveVolumeSettings() {
    // Get volume inputs by name
    const tickVolume = document.querySelector('#volumes input[name="tick"]');
    const bellVolume = document.querySelector('#volumes input[name="bell"]');
    const powerup1Volume = document.querySelector('#volumes input[name="powerup_los"]');
    const powerup2Volume = document.querySelector('#volumes input[name="powerup_ok"]');
    const failVolume = document.querySelector('#volumes input[name="powerup_bad"]');
    const trabkaVolume = document.querySelector('#volumes input[name="trabka"]');
    
    // Save values to localStorage
    localStorage.setItem('tickVolume', tickVolume.value);
    localStorage.setItem('bellVolume', bellVolume.value);
    localStorage.setItem('powerup1Volume', powerup1Volume.value);
    localStorage.setItem('powerup2Volume', powerup2Volume.value);
    localStorage.setItem('failVolume', failVolume.value);
    localStorage.setItem('trabkaVolume', trabkaVolume.value);
    
    // Update stored values
    STORED_TICK_VOL = parseFloat(tickVolume.value);
    STORED_BELL_VOL = parseFloat(bellVolume.value);
    STORED_POWERUP_1_VOL = parseFloat(powerup1Volume.value);
    STORED_POWERUP_2_VOL = parseFloat(powerup2Volume.value);
    STORED_FAIL_VOL = parseFloat(failVolume.value);
    STORED_TRABKA_VOL = parseFloat(trabkaVolume.value);

    const message = { volumes: {tick: STORED_TICK_VOL,bell: STORED_BELL_VOL, powerup: STORED_POWERUP_1_VOL, powerup2:STORED_POWERUP_2_VOL,fail:STORED_FAIL_VOL,trabka: STORED_TRABKA_VOL} };
    sendMessage(JSON.stringify(message));
    
    // Update volume value displays
    updateVolumeDisplays();
}

function resetSettings() {
    pathInput.value = PATH_TO_POMA;
    sweetAlertToggle.checked = USE_SWEETALERT;
    teamsToggle.checked = DISABLE_TEAMS;
    pointsAutomatToggle.checked = POINTS_AUTOMAT;
    
    // Reset volume inputs to default values from setup_variables.js
    const tickVolume = document.querySelector('#volumes input[name="tick"]');
    const bellVolume = document.querySelector('#volumes input[name="bell"]');
    const powerup1Volume = document.querySelector('#volumes input[name="powerup_los"]');
    const powerup2Volume = document.querySelector('#volumes input[name="powerup_ok"]');
    const failVolume = document.querySelector('#volumes input[name="powerup_bad"]');
    const trabkaVolume = document.querySelector('#volumes input[name="trabka"]');
    
    tickVolume.value = TICK_VOL;
    bellVolume.value = BELL_VOL;
    powerup1Volume.value = POWERUP_1_VOL;
    powerup2Volume.value = POWERUP_2_VOL;
    failVolume.value = FAIL_VOL;
    trabkaVolume.value = TRABKA_VOL;
    
    saveSettings();
}

// Add event listeners to volume sliders to update display and save on change
volumeInputs.forEach(input => {
    input.addEventListener('input', function() {
        // Update value display during slider movement
        const name = this.name;
        let displayElement;
        
        switch(name) {
            case 'tick':
                displayElement = document.getElementById('tick-value');
                break;
            case 'bell':
                displayElement = document.getElementById('bell-value');
                break;
            case 'powerup_los':
                displayElement = document.getElementById('powerup-los-value');
                break;
            case 'powerup_ok':
                displayElement = document.getElementById('powerup-ok-value');
                break;
            case 'powerup_bad':
                displayElement = document.getElementById('powerup-bad-value');
                break;
            case 'trabka':
                displayElement = document.getElementById('trabka-value');
                break;
        }
        
        if (displayElement) {
            displayElement.textContent = parseFloat(this.value).toFixed(2);
        }
    });
    
    // Save when slider is released
    input.addEventListener('change', saveVolumeSettings);
});

settingsBtn.addEventListener('click', () => {
    settingsDiv.style.display = 'flex';
    loadSettings();
    loadAdditional();
});

closeBtn.addEventListener('click', () => {
    settingsDiv.style.display = 'none';
    saveSettings();
    closeAdditional();
});

resetBtn2.addEventListener('click', resetSettings);

loadSettings();

