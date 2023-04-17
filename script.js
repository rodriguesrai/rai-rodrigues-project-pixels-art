const cores = document.querySelectorAll('.color');
cores[0].style.backgroundColor = 'rgb(0, 0, 0)';
cores[1].style.backgroundColor = 'rgb(0, 100, 1)';
cores[2].style.backgroundColor = 'rgb(100, 0, 2)';
cores[3].style.backgroundColor = 'rgb(0, 0, 100)';


let pixelBoard = document.createElement('div');
pixelBoard.id = 'pixel-board';
let newPixelBoard = document.body;
newPixelBoard.appendChild(pixelBoard);

//requisito 6
const guardaQuadros = document.getElementById('pixel-board')
for (let index = 0; index < 25; index += 1) {
    let divs = document.createElement('div');
    divs.classList.add('pixel');
    guardaQuadros.appendChild(divs);
}
const corInicial = document.querySelectorAll('.pixel');
for (let index of corInicial) {
    index.style.backgroundColor = 'rgb(255, 255, 255)'; 
}
/* corInicial.style.backgroundColor = 'rgb(255, 255, 255'; */

let clickReset = document.getElementById('button-random-color');

let coresGeradas = ['rgb(0, 0, 0)'];

let geraCores = () => {

    let novaCor = newRGB();

    while (coresGeradas.includes(novaCor)) {
        novaCor = newRGB();
    }


    coresGeradas.push(novaCor);
    return novaCor;
}

function newRGB() {
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);

    let redGreenBlue = `rgb(${red}, ${green}, ${blue})`;
    return redGreenBlue;
}

const mudaCores = () => {

    coresGeradas = ['rgb(0, 0, 0)']
    for (let index = 1; index < cores.length; index += 1) {
        cores[index].style.backgroundColor = geraCores();
    }
    localStorage.setItem('colorPalette', JSON.stringify(coresGeradas));
}

clickReset.addEventListener('click', mudaCores);

window.onload = () => {
    let recoverySessionStorage = JSON.parse(localStorage.getItem('colorPalette'));
    if (recoverySessionStorage != null) {
        for (let index = 1; index < recoverySessionStorage.length; index += 1) {
            cores[index].style.backgroundColor = recoverySessionStorage[index];
        }
    }

}

