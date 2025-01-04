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
    for(i=0;i<druzyny.length;i++){
        contentDivs[i].innerHTML = tabela_punkty[i];
        console.log(`Punkty${i}:${tabela_punkty[i].value}`)
        console.log(tabela_punkty[i])
    }

}