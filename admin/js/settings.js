const settingsDiv = document.getElementById('settings');
const settingsBtn = document.getElementById('settings_btn');
const closeBtn = document.getElementById('close-settings');
const resetBtn2 = document.getElementById('reset-settings');
const pathInput = document.getElementById('path-input');
const sweetAlertToggle = document.getElementById('sweetalert-toggle');
const teamsToggle = document.getElementById('teams-toggle');
const pointsAutomatToggle = document.getElementById('points-automat-toggle');

settingsDiv.style.display = 'none';

STORED_PATH_TO_POMA = '';
STORED_USE_SWEETALERT = true;
STORED_DISABLE_TEAMS = true;
STORED_POINTS_AUTOMAT = true;

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
}

function resetSettings() {
    pathInput.value = PATH_TO_POMA;
    sweetAlertToggle.checked = USE_SWEETALERT;
    teamsToggle.checked = DISABLE_TEAMS;
    pointsAutomatToggle.checked = POINTS_AUTOMAT;
    saveSettings();
}

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

