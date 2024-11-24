var druzyny=[];
function startevent() { 
  druzyny=[];
  ilosc_druzyn=Number(prompt("Podaj liczbe druzyn min 2 max 4)",4));
  
  var xhr = new XMLHttpRequest();
  xhr.open('GET', `${PATH_TO_POMA}/admin/php/update_ammount_teams.php?ilosc_druzyn=${ilosc_druzyn}`, true);
  xhr.send();
  
  for(let i=1;i<=ilosc_druzyn;i++) druzyny.push(prompt("Podaj nazwę drużyny "+ i, "Drużyna " +i));
  const message = { nazwy_druzyny: druzyny }; 
  sendMessage(JSON.stringify(message));
  const xhr3 = new XMLHttpRequest();
  xhr3.open('POST', `${PATH_TO_POMA}/admin/php/insert-nazwy-druzyny.php`, true);
  xhr3.setRequestHeader('Content-Type', 'application/json');
  xhr3.onreadystatechange = function() {
    if (xhr3.readyState === 4 && xhr3.status === 200) console.log(xhr3.responseText);
  };
  xhr3.send(JSON.stringify(message));

  ['team3', 'team4'].forEach((id, index) => {
    const button = document.getElementById(id);
    const disabled = ilosc_druzyn <= index + 2;
    button.disabled = disabled;
    button.classList.toggle('disabled', disabled);
  });
}


