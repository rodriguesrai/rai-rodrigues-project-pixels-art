const cores = document.getElementsByClassName('color')
cores[0].style.backgroundColor = 'black';
cores[1].style.backgroundColor = 'red';
cores[2].style.backgroundColor = 'blue';
cores[3].style.backgroundColor = 'pink';


/* const mudaCores = () => {
    for (let index = 1; index < cores.length; index ++) {
        const corAleatoria = Math.floor(Math.random() * cores.length);
        cores[index].style.backgroundColor = cores[corAleatoria];
    }
}

/* const mudaCores = () => {
    
    for (let index = 1; index < cores.length; index ++) {
        cores[index].style.backgroundColor = 'black';
    }
} */
