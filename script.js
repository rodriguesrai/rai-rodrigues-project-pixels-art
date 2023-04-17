const cores = document.querySelectorAll('.color');
cores[0].style.backgroundColor = 'rgb(0, 0, 0)';
cores[1].style.backgroundColor = 'rgb(0, 0, 1)';
cores[2].style.backgroundColor = 'rgb(0, 0, 2)';
cores[3].style.backgroundColor = 'rgb(0, 0, 3)';

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

