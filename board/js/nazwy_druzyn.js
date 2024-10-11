function isJSON(message) { // Taka mała logika tylko na sprawdzenie czy jest to json i jesli jest to wypakowanie ale jesli będą tylko wysyłane zmienne nie bedzie to potrzebne
    try {
        JSON.parse(message);
        return true;
    } catch (error) {
        return false;
    }
}

initializeWebSocket('ws://localhost:3000/ws', (data) => { // Ta cała obszerna funkcja będzię łączyć się z serwer i oczekiwać az dostanie jaką kolwiek wiadomość
    if(isJSON(data)){
        const message = JSON.parse(data);
            if(message.nazwy_druzyny){
                console.log(message.nazwy_druzyny);
                var druzyny=[]
                druzyny= message.nazwy_druzyny;
                console.table(druzyny) //tutaj frond endowcy macie tabelke z drużynami 
        }

    }


})