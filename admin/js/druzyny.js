var druzyny = [];



async function startevent() {
  druzyny = [];
  
  const ilosc_druzyn = await getTeamCount();
  if (!ilosc_druzyn) return;

  const teamNames = await getTeamNames(ilosc_druzyn);
  if (!teamNames) return;
  druzyny = teamNames;

  const xhr = new XMLHttpRequest();
  xhr.open('GET', `${PATH_TO_POMA}/admin/php/update_ammount_teams.php?ilosc_druzyn=${ilosc_druzyn}`, true);
  xhr.send();

  const message = { nazwy_druzyny: druzyny };
  sendMessage(JSON.stringify(message));
  
  const xhr3 = new XMLHttpRequest();
  xhr3.open('POST', `${PATH_TO_POMA}/admin/php/insert-nazwy-druzyny.php`, true);
  xhr3.setRequestHeader('Content-Type', 'application/json');
  xhr3.onreadystatechange = function() {
    if (xhr3.readyState === 4 && xhr3.status === 200) {
      // wszystko jest pomyślnie
    }
  };
  xhr3.send(JSON.stringify(message));

  ['team3', 'team4'].forEach((id, index) => {
    const button = document.getElementById(id);
    const disabled = ilosc_druzyn <= index + 2;
    button.disabled = disabled;
    button.classList.toggle('disabled', disabled);
  });

  wysylanie();
}


async function getTeamCount() {
  if (use_sweetalert) {
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
    if (use_sweetalert) {
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


