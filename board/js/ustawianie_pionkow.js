function setPosition(elementId, x, y) {
    const element = document.getElementById(elementId);
    element.style.left = x + '%';
    element.style.top = y + '%';
}

function Pozycja1(tabela_punkty) {
    const positions = [
        { x: 44.5, y: 40.4 }, //0
        { x: 38.9, y: 40.4 }, //1
        { x: 33.75, y: 40.4 }, //2
        { x: 28.6, y: 40.4 }, //3
        { x: 28.6, y: 31.2 }, //4
        { x: 28.6, y: 22.5 }, //5
        { x: 33.75, y: 22.5 }, //6
        { x: 38.9, y: 22.5}, //7
        { x: 38.9, y: 13.5 }, //8
        { x: 38.9, y: 4.7 }, //9
        { x: 33.75, y: 4.7 }, //10
        { x: 28.6, y: 4.7 } //11
    ];

    const position = positions[tabela_punkty[0]]
    console.log(position);
    setPosition('pawn1', position.x, position.y);
}
function Pozycja2(tabela_punkty) {
const positions = [
    { x: 51, y: 40.4 },//0
    { x: 57, y: 40.4 },//1
    { x: 62, y: 40.4},//2
    { x: 67.1, y: 40.4},//3
    { x: 67.1, y: 31.2 },//4
    { x: 67.1, y: 22.5 },//5
    { x: 62, y: 22.5 },//6
    { x: 57, y: 22.5 },//7
    { x: 57, y: 13.5 },//8
    { x: 57, y: 4.7 },//9
    { x: 62, y: 4.7 },//10
    { x: 67.1, y: 4.7 }
];

    const position = positions[tabela_punkty[1]]
    console.log(position);
    setPosition('pawn2', position.x, position.y);
}
function Pozycja3(tabela_punkty) {


    const positions = [
        { x: 44.5, y: 52.5 },//0
        { x: 38.9, y: 52.5 },//1
        { x: 33.75, y: 52.5 },//2
        { x: 28.6, y: 52.5 },//3
        { x: 28.6, y: 61.5 },//4
        { x: 28.6, y: 70.5 },//5
        { x: 33.75, y: 70.5 },//6
        { x: 38.9, y: 70.5 },//7
        { x: 38.9, y: 79.2},//8
        { x: 38.9, y: 88 },//9
        { x: 33.75, y: 88 },//10
        { x: 26.8, y: 88 }//11
    ];

    const position = positions[tabela_punkty[2]]
    console.log(position);
    setPosition('pawn3', position.x, position.y);
}
function Pozycja4(tabela_punkty) {
    const positions = [
        { x: 51, y: 52.5 },
        { x: 57, y: 52.5 },
        { x: 62, y: 52.5 },
        { x: 67.1, y: 52.5 },
        { x: 67.1, y: 61.5 },
        { x: 67.1, y: 70.5 },
        { x: 62, y: 70.5 },
        { x: 57, y: 70.5},
        { x: 57, y: 79.2 },
        { x: 57, y: 88 },
        { x: 62, y: 88 },
        { x: 67.1, y: 88 }
    ];

    const position = positions[tabela_punkty[3]]
    console.log(position);
    setPosition('pawn4', position.x, position.y);
}