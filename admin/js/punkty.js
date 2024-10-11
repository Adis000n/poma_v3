var punkty1 = 0;
var punkty2 = 0;
var punkty3 = 0;
var punkty4 = 0;

function Punkty_przesyl() {
    if (Pytanie.numerDruzyny == 1) {
        if (Pytanie.punkty == 1) {
            punkty1++;
        } else if (Pytanie.punkty == 2) {
            punkty1 += 2;
        } else if (Pytanie.punkty == 3) {
            punkty1 += 3;
        }
    }
    else if (Pytanie.numerDruzyny == 2) {
        if (Pytanie.punkty == 1) {
            punkty2++;
        } else if (Pytanie.punkty == 2) {
            punkty2 += 2;
        } else if (Pytanie.punkty == 3) {
            punkty2 += 3;
        }
    }
    else if (Pytanie.numerDruzyny == 3) {
        if (Pytanie.punkty == 1) {
            punkty3++;
        } else if (Pytanie.punkty == 2) {
            punkty3 += 2;
        } else if (Pytanie.punkty == 3) {
            punkty3 += 3;
        }
    }
    else if (Pytanie.numerDruzyny == 4) {
        if (Pytanie.punkty == 1) {
            punkty4++;
        } else if (Pytanie.punkty == 2) {
            punkty4 += 2;
        } else if (Pytanie.punkty == 3) {
            punkty4 += 3;
        }
    }

    wysylanie();
}
function wysylanie() { 
 var tabela_punkty = [punkty1,punkty2,punkty3,punkty4]
const message = { punkty_druzyny: tabela_punkty }; 
sendMessage(JSON.stringify(message));
}