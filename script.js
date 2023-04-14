
cores[0].style.backgroundColor = 'black';
/* cores[1].style.backgroundColor = 'red';
cores[2].style.backgroundColor = 'blue';
cores[3].style.backgroundColor = 'pink'; */



const cores = document.getElementsByClassName('color')

let clickReset = document.getElementById('button-random-color');
let mudaCores = (evento) => {
    for (let index = 1; index < cores.length; index++) {
        let red = Math.floor(Math.random() * 256);
        let green = Math.floor(Math.random() * 256);
        let blue = Math.floor(Math.random() * 256);
        if (red === 255 & green === 255 & blue === 255) {
            red = Math.floor(Math.random() * 256);
            green = Math.floor(Math.random() * 256);
            blue = Math.floor(Math.random() * 256);
        } 
    coresAtuais = [cores[index]]

        cores[index].style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
    }
}
clickReset.addEventListener('click', mudaCores);
