var tabela_punkty = [0, 0, 0, 0]; 
function Punkty_przesyl() {
    tabela_punkty[Pytanie.numerDruzyny - 1] += parseInt(Pytanie.punkty); 
    wysylanie();
}
function wysylanie() { 
const message = { punkty_druzyny: tabela_punkty }; 
sendMessage(JSON.stringify(message));
    // Update the database
    const xhr4 = new XMLHttpRequest();
    xhr4.open('POST', 'http://localhost/poma_v5/poma_v3/admin/php/update-punkty-druzyny.php', true);
    xhr4.setRequestHeader('Content-Type', 'application/json');
    xhr4.onreadystatechange = function() {
        if (xhr4.readyState === 4) {
            if (xhr4.status === 200) {
                console.log(xhr4.responseText); // Log the raw response text
                try {
                    const jsonResponse = JSON.parse(xhr4.responseText); // Parse the JSON response
                    console.log(jsonResponse); // Log the parsed JSON object
                } catch (e) {
                    console.error("Failed to parse JSON response:", e);
                }
                console.log("chyba działa");
            } else {
                console.error("Request failed with status:", xhr4.status);
            }
        }
    };
    xhr4.send(JSON.stringify(message));
}
// Manualna zmiana taktak
function manualChangePoints() {
    const teamSelect = document.getElementById('team_select').value; 
    const teamPoints = document.getElementById('team_points').value; 

    if (teamPoints === '' || isNaN(teamPoints)) {
        alert('Proszę wprowadzić prawidłową liczbę punktów.');
        return;
    }
    tabela_punkty[teamSelect - 1] = parseInt(teamPoints);
    console.log(`Punkty drużyny ${teamSelect} zostały zmienione na: ${teamPoints}`);
    wysylanie();
}

// funkcja do wyswietlania
function updateTeamDisplay() {
    let display = '';
    tabela_punkty.forEach((points, index) => {
        display += `Drużyna ${index + 1}: ${points} punktów\n`;
    });
    console.log(display); 
};