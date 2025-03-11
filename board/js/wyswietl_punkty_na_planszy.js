function AktualizacjaPunkty(tabela_punkty){
    const contentDivs = [
        document.getElementById('points1'),
        document.getElementById('points2'),
        document.getElementById('points3'),
        document.getElementById('points4')
    ];

    // tabela_punkty.forEach((value, index) => {
    //     if (contentDivs[index]) {
    //         contentDivs[index].innerHTML = value;
    //     }
    // });
    const boosters=[
        document.getElementById('boost1'),
        document.getElementById('boost2'),
        document.getElementById('boost3'),
        document.getElementById('boost4')
    ]
    for(i=0;i<druzyny.length;i++){
        contentDivs[i].innerHTML = tabela_punkty[i];
        console.log(`Punkty${i}:${tabela_punkty[i].value}`)
        console.log(tabela_punkty[i])
        let boost = parseInt(boosters[i].textContent);
        console.log(boost);
        if(tabela_punkty[i]==2 && boost==0){
            boosters[i].innerHTML=1;
            let showWheele = true;
            const message = {wheele: showWheele};
            sendMessage(JSON.stringify(message));
        }
        if(tabela_punkty[i]==6 &&  boost==0){
            boosters[i].innerHTML=2;
            let showWheele = true;
            const message = {wheele: showWheele};
            sendMessage(JSON.stringify(message));
        }
        if(tabela_punkty[i]==6 &&  boost==1){
            boosters[i].innerHTML=2;
            let showWheele = true;
            const message = {wheele: showWheele};
            sendMessage(JSON.stringify(message));
        }
        if(tabela_punkty[i]==8 && boost==0){
            boosters[i].innerHTML=3;
            let showWheele = true;
            const message = {wheele: showWheele};
            sendMessage(JSON.stringify(message));
        }
        if(tabela_punkty[i]==8 && boost==1){
            boosters[i].innerHTML=3;
            let showWheele = true;
            const message = {wheele: showWheele};
            sendMessage(JSON.stringify(message));
        }
        if(tabela_punkty[i]==8 && boost==2){
            boosters[i].innerHTML=3;
            let showWheele = true;
            const message = {wheele: showWheele};
            sendMessage(JSON.stringify(message));
        }
        if(tabela_punkty[i] >= 11) {
            const teamNameElement = document.getElementById(`nazwa_druzny${i + 1}`);
            const teamName = teamNameElement ? teamNameElement.textContent : `Drużyna ${i + 1}`;
            const message = { winningTeam: teamName };
            sendMessage(JSON.stringify(message));
        }
    }

}