const settingsDiv = document.getElementById('settings');
const settingsBtn = document.getElementById('settings_btn');
const closeBtn = document.getElementById('close-settings');
const resetBtn2 = document.getElementById('reset-settings');
const pathInput = document.getElementById('path-input');
const sweetAlertToggle = document.getElementById('sweetalert-toggle');
const teamsToggle = document.getElementById('teams-toggle');

settingsDiv.style.display = 'none';

STORED_PATH_TO_POMA = '';
STORED_USE_SWEETALERT = true;
STORED_DISABLE_TEAMS = true;

function loadSettings() {
    const storedPath = localStorage.getItem('pomaPath') || PATH_TO_POMA;
    const storedSweetAlert = localStorage.getItem('useSweetAlert') ? 
        localStorage.getItem('useSweetAlert') === 'true' : USE_SWEETALERT;
    const storedTeams = localStorage.getItem('disableTeams') ? 
        localStorage.getItem('disableTeams') === 'true' : DISABLE_TEAMS;

    pathInput.value = storedPath;
    sweetAlertToggle.checked = storedSweetAlert;
    teamsToggle.checked = storedTeams;

    STORED_PATH_TO_POMA = storedPath;
    STORED_USE_SWEETALERT = storedSweetAlert;
    STORED_DISABLE_TEAMS = storedTeams;
}

function saveSettings() {
    localStorage.setItem('pomaPath', pathInput.value);
    localStorage.setItem('useSweetAlert', sweetAlertToggle.checked);
    localStorage.setItem('disableTeams', teamsToggle.checked);
    
    STORED_PATH_TO_POMA = pathInput.value;
    STORED_USE_SWEETALERT = sweetAlertToggle.checked;
    STORED_DISABLE_TEAMS = teamsToggle.checked;
}

function resetSettings() {
    pathInput.value = PATH_TO_POMA;
    sweetAlertToggle.checked = USE_SWEETALERT;
    teamsToggle.checked = DISABLE_TEAMS;
    saveSettings();
}

settingsBtn.addEventListener('click', () => {
    settingsDiv.style.display = 'flex';
    loadSettings();
});

closeBtn.addEventListener('click', () => {
    settingsDiv.style.display = 'none';
    saveSettings();
});

resetBtn2.addEventListener('click', resetSettings);

loadSettings();

