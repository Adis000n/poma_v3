var tabela_punkty = [0, 0, 0, 0]; 
function Punkty_przesyl() {
    tabela_punkty[Pytanie.numerDruzyny - 1] += parseInt(Pytanie.punkty); 
    wysylanie();
}
function wysylanie() { 
const message = { punkty_druzyny: tabela_punkty }; 
sendMessage(JSON.stringify(message));
}