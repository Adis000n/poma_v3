
function setPosition(elementId, x, y) {
    const element = document.getElementById(elementId);
    const boardWidth = document.getElementById('board').offsetWidth;
    const boardHeight = document.getElementById('board').offsetHeight;
    console.log(boardWidth, boardHeight);

    const percentageX = (x / boardWidth) * 100;
    const percentageY = (y / boardHeight) * 100;

    element.style.left = percentageX + '%';
    element.style.top = percentageY + '%';
}
function Pozycja1(tabela_punkty) {
    const positions = [
        { x: 330, y: 330 },
        { x: 240, y: 328 },
        { x: 163, y: 328 },
        { x: 86, y: 328 },
        { x: 86, y: 250 },
        { x: 86, y: 172 },
        { x: 164, y: 172 },
        { x: 242, y: 172 },
        { x: 242, y: 94 },
        { x: 242, y: 20 },
        { x: 164, y: 20 },
        { x: 66, y: 20 }
    ];

    // if (tabela_punkty[0] === 0) {
    //     document.getElementById('pawn1').querySelector('img').removeAttribute('hidden');
    //     document.getElementById('pawn1').style.boxShadow = '0 0 10px 20px rgba(0, 0, 0, 0.363)';
    // }

    const position = positions[Math.min(tabela_punkty[0], positions.length - 1)];
    setPosition('pawn1', position.x, position.y);
  
}
function Pozycja2(team2) {
    const positions = [
        { x: 430, y: 330 },
        { x: 520, y: 328 },
        { x: 598, y: 328 },
        { x: 675, y: 328 },
        { x: 675, y: 250 },
        { x: 675, y: 172 },
        { x: 597, y: 172 },
        { x: 519, y: 172 },
        { x: 519, y: 94 },
        { x: 520, y: 20 },
        { x: 598, y: 20 },
        { x: 696, y: 20 }
    ];

    // if (team2 === 0) {
    //     document.getElementById('pawn2').querySelector('img').removeAttribute('hidden');
    //     document.getElementById('pawn2').style.boxShadow = '0 0 10px 20px rgba(0, 0, 0, 0.363)';
    // }

    const position = positions[Math.min(team2, positions.length - 1)];
    setPosition('pawn2', position.x, position.y);
}
function Pozycja3(team3) {
    const positions = [
        { x: 330, y: 430 },
        { x: 240, y: 432 },
        { x: 163, y: 432 },
        { x: 86, y: 432 },
        { x: 86, y: 510 },
        { x: 86, y: 588 },
        { x: 164, y: 588 },
        { x: 242, y: 588 },
        { x: 242, y: 666 },
        { x: 242, y: 740 },
        { x: 164, y: 740 },
        { x: 66, y: 740 }
    ];

    // if (team3 === 0 && !tylko_dwie) {
    //     document.getElementById('pawn3').querySelector('img').removeAttribute('hidden');
    //     document.getElementById('pawn3').style.boxShadow = '0 0 10px 20px rgba(0, 0, 0, 0.363)';
    // }

    const position = positions[Math.min(team3, positions.length - 1)];
    setPosition('pawn3', position.x, position.y);
}
function Pozycja4(team4) {
    const positions = [
        { x: 430, y: 430 },
        { x: 520, y: 432 },
        { x: 597, y: 432 },
        { x: 675, y: 432 },
        { x: 675, y: 510 },
        { x: 675, y: 588 },
        { x: 597, y: 588 },
        { x: 519, y: 588 },
        { x: 519, y: 664 },
        { x: 519, y: 740 },
        { x: 598, y: 740 },
        { x: 696, y: 740 }
    ];

    // if (team4 === 0 && !tylko_trzy) {
    //     document.getElementById('pawn4').querySelector('img').removeAttribute('hidden');
    //     document.getElementById('pawn4').style.boxShadow = '0 0 10px 20px rgba(0, 0, 0, 0.363)';
    // }

    const position = positions[Math.min(team4, positions.length - 1)];
    setPosition('pawn4', position.x, position.y);
}