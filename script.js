const cores = document.querySelectorAll('.color');
cores[0].style.backgroundColor = 'rgb(0, 0, 0)';
cores[1].style.backgroundColor = 'rgb(0, 100, 1)';
cores[2].style.backgroundColor = 'rgb(100, 0, 2)';
cores[3].style.backgroundColor = 'rgb(0, 0, 100)';
cores[0].classList.add('selected'); // requisito 8


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
const corInicial = document.querySelectorAll('.pixel'); // requisito 7
for (let index of corInicial) {
    index.style.backgroundColor = 'rgb(255, 255, 255)';
}


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


let chamaPaleta = document.querySelectorAll('div.color'); //requisito 9

const selectPaleta = (event) => {
    for (let index = 0; index < chamaPaleta.length; index += 1) {
        chamaPaleta[index].classList.remove('selected')

    }
    event.target.classList.add('selected');


}
for (index of chamaPaleta) {
    index.addEventListener('click', selectPaleta);
}

const selectPixel = document.getElementsByClassName('pixel')
const mudaPixel = (event) => {
    const selected = document.querySelector('.selected')
    event.target.style.backgroundColor = selected.style.backgroundColor;
}

for (let pixel of selectPixel) {
    pixel.addEventListener('click', mudaPixel)
}




window.onload = () => {
    let recoverySessionStorage = JSON.parse(localStorage.getItem('colorPalette'));
    if (recoverySessionStorage != null) {
        for (let index = 1; index < recoverySessionStorage.length; index += 1) {
            cores[index].style.backgroundColor = recoverySessionStorage[index];
        }
    }

}