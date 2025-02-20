const config = {
    digits: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    transitionDuration: 3000,
    digitFadeDelay: 50
};

const DIGIT_HEIGHT = 8;

const createElement = (type, className, text) => {
    const element = document.createElement(type);
    element.className = className;
    if (text !== undefined) element.innerText = text;
    return element;
};

const createDigit = (digit, trackIndex) => {
    const digitElement = createElement("span", "digit");
    const trackElement = createElement("span", "digit-track");
    let digits = [];
    for (let i = 0; i < 10; i++) digits.push(i);
    trackElement.innerText = digits.join(" ");
    trackElement.style.transitionDuration = `${config.transitionDuration}ms`;
    digitElement.appendChild(trackElement);
    setTimeout(() => digitElement.classList.add('visible'), trackIndex * config.digitFadeDelay);
    return digitElement;
};

const setupCounter = (element, value) => {
    element.innerHTML = "";
    String(value).split("").forEach((character, index) => {
        element.appendChild(createDigit(character, index));
    });
};

const animateCounter = (element, value) => {
    const currentDigits = element.querySelectorAll(".digit-track").length;
    const newValue = String(value);
    const newLength = newValue.length;
    
    if (currentDigits !== newLength) {
        const currentPositions = Array.from(element.querySelectorAll(".digit-track")).map(track => {
            const transform = track.style.translate;
            return transform ? parseInt(transform.split(' ')[1]) : 0;
        });
        setupCounter(element, value);
        element.querySelectorAll(".digit-track").forEach((track, index) => {
            if (index < currentPositions.length) {
                track.style.translate = `0rem ${currentPositions[index]}rem`;
            }
        });
        element.offsetHeight;
    }
    
    element.querySelectorAll(".digit-track").forEach((track, index) => {
        const digit = parseInt(String(value)[index]) || 0;
        track.style.translate = `0rem ${digit * -DIGIT_HEIGHT}rem`;
    });
};
