let selectedCustomTeam = null;

function selectCustomOption(selectedButton, type) {
    const buttons = selectedButton.closest('.btn-group').querySelectorAll('.btn');
    buttons.forEach(function(button) {
        button.classList.remove('btn-primary');
        button.classList.add('btn-outline-primary');
    });

    selectedButton.classList.remove('btn-outline-primary');
    selectedButton.classList.add('btn-primary');
    selectedCustomTeam = selectedButton.value;
}

function getCustomPytanieInfo() {
    const pytanieId = document.getElementById('numer_pytania').value;
    
    if (!selectedCustomTeam) {
        alert('Wybierz numer drużyny!');
        return;
    }
    
    if (!pytanieId) {
        alert('Wprowadź ID pytania!');
        return;
    }

    console.log('ID pytania:', pytanieId);
    console.log('Numer drużyny:', selectedCustomTeam);
}