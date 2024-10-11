var druzyny=[];
function startevent() { //funkcja która działa po naciścięciu start konkursu
  druzyny=[];
      ilosc_druzyn=Number(prompt("Podaj liczbe druzyn min 2 max 4)",4)) // PROMPT do podania liczby druzyn
      for(let i=1;i<=ilosc_druzyn;i++){                                 //Pentla od nazw drużyn
      druzyny.push(prompt("Podaj nazwę drużyny "+ i, "Drużyna " +i))    //wprowadza dane do tablicy
  }   
  var stan = confirm("chcesz wysłać?"); //potwierdzenie wysłania
  if(stan==true){
  console.table(druzyny);
  const message = { nazwy_druzyny: druzyny }; 
  sendMessage(JSON.stringify(message));
  }
}
function stopevent(){
var stan = confirm("ZAKOŃCZ KONKURS");
  if(stan==true){
  druzyny=[];
  const message = { nazwy_druzyny: druzyny };
  sendMessage(JSON.stringify(message));}
 
}