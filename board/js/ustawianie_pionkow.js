
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
        { x: 445, y: 404 },//0
        { x: 389, y: 404 },//1
        { x: 337.5, y: 404 },//2
        { x: 286, y: 404 },//3
        { x: 286, y: 312.5 },//4
        { x: 286, y: 221 },//5
        { x: 337.5, y: 221 },//6
        { x: 389, y: 221 },//7
        { x: 389, y: 135 },//8
        { x: 389, y: 44 },//9
        { x: 337.5, y: 44 },//10
        { x: 286, y: 44 }//11
    ];

    // if (tabela_punkty[0] === 0) {
    //     document.getElementById('pawn1').querySelector('img').removeAttribute('hidden');
    //     document.getElementById('pawn1').style.boxShadow = '0 0 10px 20px rgba(0, 0, 0, 0.363)';
    // }

    const position = positions[Math.min(tabela_punkty[0], positions.length - 1)];
    setPosition('pawn1', position.x, position.y);
  
}
function Pozycja2(tabela_punkty) {
const positions = [
    { x: 512.5, y: 415 },
    { x: 632.5, y: 398 },
    { x: 710.5, y: 398 },
    { x: 787.5, y: 398 },
    { x: 787.5, y: 320 },
    { x: 787.5, y: 242 },
    { x: 709.5, y: 242 },
    { x: 631.5, y: 242 },
    { x: 631.5, y: 164 },
    { x: 632.5, y: 90 },
    { x: 710.5, y: 90 },
    { x: 808.5, y: 90 }
];

    // if (team2 === 0) {
    //     document.getElementById('pawn2').querySelector('img').removeAttribute('hidden');
    //     document.getElementById('pawn2').style.boxShadow = '0 0 10px 20px rgba(0, 0, 0, 0.363)';
    // }

    const position = positions[Math.min(tabela_punkty[1], positions.length - 1)];
    setPosition('pawn2', position.x, position.y);
}
function Pozycja3(tabela_punkty) {


    const positions = [
        { x: 442.5, y: 525 },
        { x: 352.5, y: 502 },
        { x: 275.5, y: 502 },
        { x: 198.5, y: 502 },
        { x: 198.5, y: 580 },
        { x: 198.5, y: 658 },
        { x: 276.5, y: 658 },
        { x: 354.5, y: 658 },
        { x: 354.5, y: 736 },
        { x: 354.5, y: 810 },
        { x: 276.5, y: 810 },
        { x: 178.5, y: 810 }
    ];

    // if (team3 === 0 && !tylko_dwie) {
    //     document.getElementById('pawn3').querySelector('img').removeAttribute('hidden');
    //     document.getElementById('pawn3').style.boxShadow = '0 0 10px 20px rgba(0, 0, 0, 0.363)';
    // }

    const position = positions[Math.min(tabela_punkty[2], positions.length - 1)];
    setPosition('pawn3', position.x, position.y);
}
function Pozycja4(tabela_punkty) {
    const positions = [
        { x: 512.5, y: 525 },
        { x: 632.5, y: 502 },
        { x: 709.5, y: 502 },
        { x: 787.5, y: 502 },
        { x: 787.5, y: 580 },
        { x: 787.5, y: 658 },
        { x: 709.5, y: 658 },
        { x: 631.5, y: 658 },
        { x: 631.5, y: 736 },
        { x: 631.5, y: 810 },
        { x: 709.5, y: 810 },
        { x: 808.5, y: 810 }
    ];

    // if (team4 === 0 && !tylko_trzy) {
    //     document.getElementById('pawn4').querySelector('img').removeAttribute('hidden');
    //     document.getElementById('pawn4').style.boxShadow = '0 0 10px 20px rgba(0, 0, 0, 0.363)';
    // }

    const position = positions[Math.min(tabela_punkty[3], positions.length - 1)];
    setPosition('pawn4', position.x, position.y);
}