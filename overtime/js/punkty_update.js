function AktualizacjaPunkty(tabela_punkty){
    const contentDivs = [
        document.getElementById('points1'),
        document.getElementById('points2')
    ];

    tabela_punkty.forEach((value, index) => {
        if (contentDivs[index]) {
            contentDivs[index].innerHTML =value;
        }
    });

    console.log("Points updated successfully");
}