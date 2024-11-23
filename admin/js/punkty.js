var tabela_punkty = [0, 0, 0, 0]; 
function Punkty_przesyl() {
    tabela_punkty[Pytanie.numerDruzyny - 1] += parseInt(Pytanie.punkty); 
    wysylanie();
    updateDisplay(); 
}
function wysylanie() { 
const message = { punkty_druzyny: tabela_punkty }; 
sendMessage(JSON.stringify(message));
    // Update the database
    const xhr4 = new XMLHttpRequest();
    xhr4.open('POST', 'http://localhost/projekty/poma_v3/admin/php/update-punkty-druzyny.php', true);
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
function updateDisplay() {
    const teamsContainer = document.getElementById("teams");
    teamsContainer.innerHTML = ""; 

    tabela_punkty.forEach((points, index) => {
        const teamNumber = index + 1;
        const teamDiv = document.createElement("div");
        teamDiv.className = "team-container";

        // HTML dla każdej drużyny 
        teamDiv.innerHTML = `
            <div class="team-header">Drużyna ${teamNumber}</div>
            <input type="number" id="team_points_${teamNumber}" class="team-input" value="${points}" onchange="manualChange(${teamNumber})">
            <div class="team-buttons">
                <button class="btn-negative" onclick="changePoints(${teamNumber}, -2)">-2</button>
                <button class="btn-negative" onclick="changePoints(${teamNumber}, -1)">-1</button>
                <button class="btn-positive" onclick="changePoints(${teamNumber}, 1)">+1</button>
                <button class="btn-positive" onclick="changePoints(${teamNumber}, 2)">+2</button>
            </div>
        `;
        teamsContainer.appendChild(teamDiv);
    });
    const applyButton = document.createElement("button");
    applyButton.className = "apply-button";
    applyButton.innerText = "Zastosuj";
    applyButton.onclick = applyPoints; 
    teamsContainer.appendChild(applyButton); 
}
function changePoints(teamNumber, change) {
    tabela_punkty[teamNumber - 1] += change;
    document.getElementById(`team_points_${teamNumber}`).value = tabela_punkty[teamNumber - 1];
}
function manualChange(teamNumber) {
    const newPoints = parseInt(document.getElementById(`team_points_${teamNumber}`).value);
    if (!isNaN(newPoints)) {
        tabela_punkty[teamNumber - 1] = newPoints;
    }
}
function applyPoints() {
    const message = { punkty_druzyny: tabela_punkty };
    sendMessage(JSON.stringify(message)); 
    wysylanie(); 
    console.log("Zastosowano punkty:", tabela_punkty);
}
window.onload = updateDisplay;