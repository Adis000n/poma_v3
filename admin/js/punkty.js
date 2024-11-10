var tabela_punkty = [0, 0, 0, 0]; 
function Punkty_przesyl() {
    tabela_punkty[Pytanie.numerDruzyny - 1] += parseInt(Pytanie.punkty); 
    wysylanie();
}
function wysylanie() { 
const message = { punkty_druzyny: tabela_punkty }; 
sendMessage(JSON.stringify(message));
}
function manualChangePoints() {
    const teamSelect = document.getElementById('team_select').value; // Pobieranie numeru drużyny z selecta
    const teamPoints = document.getElementById('team_points').value; // Pobieranie wprowadzonych punktów

    if (teamPoints === '' || isNaN(teamPoints)) {
        alert('Proszę wprowadzić prawidłową liczbę punktów.');
        return;
    }
    tabela_punkty[teamSelect - 1] = parseInt(teamPoints);
    console.log(`Punkty drużyny ${teamSelect} zostały zmienione na: ${teamPoints}`);
    wysylanie();
}

// Opcjonalna funkcja do wyświetlania aktualnych wyników w interfejsie
function updateTeamDisplay() {
    let display = '';
    tabela_punkty.forEach((points, index) => {
        display += `Drużyna ${index + 1}: ${points} punktów\n`;
    });
    console.log(display); 
};