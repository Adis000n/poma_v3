var druzyny=[];
function startevent() { //funkcja która działa po naciścięciu start konkursu
  druzyny=[];
      ilosc_druzyn=Number(prompt("Podaj liczbe druzyn min 2 max 4)",4)) // PROMPT do podania liczby druzyn
      for(let i=1;i<=ilosc_druzyn;i++){                                 //Pentla od nazw drużyn
      druzyny.push(prompt("Podaj nazwę drużyny "+ i, "Drużyna " +i))    //wprowadza dane do tablicy
  }   
  console.table(druzyny);
  const message = { nazwy_druzyny: druzyny }; 
  sendMessage(JSON.stringify(message));
  //update do bazy danyhc
  const xhr3 = new XMLHttpRequest();
  xhr3.open('POST', 'http://localhost/poma_v5/poma_v3/admin/php/insert-nazwy-druzyny.php', true);
  xhr3.setRequestHeader('Content-Type', 'application/json');
  xhr3.onreadystatechange = function() {
    console.log("chyba działa123");
    if (xhr3.readyState === 4 && xhr3.status === 200) {
      console.log(xhr3.responseText);
      console.log("chyba działa");
    }
  };
  xhr3.send(JSON.stringify(message));
}


