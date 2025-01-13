var druzyny = [];

async function startevent() {
  druzyny = [];
  
  const ilosc_druzyn = await getTeamCount();
  if (!ilosc_druzyn) return;

  const teamNames = await getTeamNames(ilosc_druzyn);
  if (!teamNames) return;
  druzyny = teamNames;
  GLOBAL_ILOSC_DRUZYN = ilosc_druzyn;

  if(SERVER_RUNNING){
    const xhr = new XMLHttpRequest();
    xhr.open('GET', `${STORED_PATH_TO_POMA}/admin/php/update_ammount_teams.php?ilosc_druzyn=${ilosc_druzyn}`, true);
    xhr.send();

    const message = { nazwy_druzyny: druzyny };
    sendMessage(JSON.stringify(message));
    
    const xhr3 = new XMLHttpRequest();
    xhr3.open('POST', `${STORED_PATH_TO_POMA}/admin/php/insert-nazwy-druzyny.php`, true);
    xhr3.setRequestHeader('Content-Type', 'application/json');
    xhr3.onreadystatechange = function() {
      if (xhr3.readyState === 4 && xhr3.status === 200) {
        // wszystko jest pomyślnie
      }
    };
    xhr3.send(JSON.stringify(message));
  } else {
    showToast('warning', 'Serwer jest rozłączony. Nie można zapisać danych drużyn.');
    return;
  }

  if(STORED_DISABLE_TEAMS){
    disableBtnsForNotActiveTeams(parseInt(ilosc_druzyn));
}
  wysylanie();
}

async function getTeamCount() {
  if (STORED_USE_SWEETALERT) {
    const { value, dismiss } = await Swal.fire({
      title: 'Podaj liczbe druzyn',
      text: 'min 2 max 4',
      input: 'number',
      inputValue: 4,
      background: '#333',
      color: '#fff',
      confirmButtonColor: '#3085d6',
      showCancelButton: true,
      cancelButtonText: 'Anuluj',
      cancelButtonColor: '#d33',
      inputValidator: (value) => {
        if (!value || value < 2 || value > 4) {
          return 'Liczba drużyn musi być między 2 a 4'
        }
      }
    });
    if (!value || dismiss === Swal.DismissReason.cancel) return null;
    return value;
  } else {
    const count = prompt('Podaj liczbe druzyn (2-4):\nKliknij Anuluj aby przerwać', '4');
    if (count === null || count.trim() === '') return null;
    const parsedCount = parseInt(count);
    if (isNaN(parsedCount) || parsedCount < 2 || parsedCount > 4) return null;
    return parsedCount;
  }
}

async function getTeamNames(count) {
  const teams = [];
  for(let i = 1; i <= count; i++) {
    let teamName;
    if (STORED_USE_SWEETALERT) {
      const { value, dismiss } = await Swal.fire({
        title: `Podaj nazwę drużyny ${i}`,
        input: 'text',
        inputValue: ``,
        background: '#333',
        color: '#fff',
        confirmButtonColor: '#3085d6',
        showCancelButton: true,
        cancelButtonText: 'Anuluj proces',
        cancelButtonColor: '#d33',
        inputValidator: (value) => {
          if (!value) {
            return 'Musisz wpisać nazwę drużyny!'
          }
        }
      });
      if (dismiss === Swal.DismissReason.cancel) return null;
      teamName = value;
    } else {
      teamName = prompt(`Podaj nazwę drużyny ${i}:\nKliknij Anuluj aby przerwać cały proces`);
      if (teamName === null) return null;
      if (teamName.trim() === '') return null;
    }
    teams.push(teamName || `Drużyna ${i}`);
  }
  return teams;
}


