function isJSON(message) { 
    try {
        JSON.parse(message);
        return true;
    } catch (error) {
        return false;
    }
}

initializeWebSocket('ws://localhost:3000/ws', (data) => { 
    if(isJSON(data)){
        const message = JSON.parse(data);
            if(message.nazwy_druzyny){
                // console.log(message.nazwy_druzyny);
                var druzyny=[]
                druzyny= message.nazwy_druzyny;
                console.table(druzyny) //tutaj frond endowcy macie tabelke z drużynami 
                NazwyUpdate(druzyny)

        }
        else if(message.punkty_druzyny){
            // console.table(message.punkty_druzyny);
            var tabela_punkty= [] = message.punkty_druzyny;
            console.table(tabela_punkty);// tutaj front endowcy macie tabelke z punktami drużyn 
            AktualizacjaPunkty(tabela_punkty);
        }

    }


})
