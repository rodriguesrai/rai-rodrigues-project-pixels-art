const cores = document.getElementsByClassName('color');
cores[0].style.backgroundColor = 'black';

let clickReset = document.getElementById('button-random-color');
let mudaCores = (evento) => {
    for (let index = 1; index < cores.length; index++) {
        let coresGeradas = [];
        let red = Math.floor(Math.random() * 256);
        let green = Math.floor(Math.random() * 256);
        let blue = Math.floor(Math.random() * 256);
        if (red === 255 & green === 255 & blue === 255) {
            red = Math.floor(Math.random() * 256);
            green = Math.floor(Math.random() * 256);
            blue = Math.floor(Math.random() * 256);
        }
       

        cores[index].style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
    }
}
clickReset.addEventListener('click', mudaCores);
