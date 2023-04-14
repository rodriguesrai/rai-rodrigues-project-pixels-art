const cores = document.getElementsByClassName('color')
cores = cores[0].style.backgroundColor = 'black';

const mudaCores = () => {
    for (index = 1; index < cores.length; index ++) {
        cores[index].style.backgroundColor = 'black';
    }
}