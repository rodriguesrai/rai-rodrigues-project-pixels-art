const cores = document.getElementsByClassName('color');
cores[0].style.backgroundColor = 'rgb(0, 0, 0)';

let clickReset = document.getElementById('button-random-color');
let coresGeradas = [];
let geraCores = () => {
    let red = Math.round(Math.random() * 255);
    let green = Math.round(Math.random() * 255);
    let blue = Math.round(Math.random() * 255);

    redGreenBlue = `rgb(${red}, ${green}, ${blue})`;
    return redGreenBlue;
}

const mudaCores = () => {
    for (let index = 1; index < cores.length; index += 1) {
        cores[index].style.backgroundColor = geraCores();
    }
}



/* coresGeradas.push(`rgb(${red}, ${green}, ${blue})`)
 
cores[index].style.backgroundColor = `rgb(${red}, ${green}, ${blue})`; */

clickReset.addEventListener('click', mudaCores);
