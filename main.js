const title = document.getElementById('title');
const name = document.getElementById('name');
const red = document.getElementById('red');
const blue = document.getElementById('blue');
const green = document.getElementById('green')

function changeTitleRed(){
    title.textContent = name.value;
    title.className = "";
    title.classList.add('red');
}
function changeTitleBlue(){
    title.textContent = name.value;
    title.className = "";
    title.classList.add('blue');
}
function changeTitleGreen(){
    title.textContent = name.value;
    title.className = "";
    title.classList.add('green');
}
red.addEventListener('click', changeTitleRed)
blue.addEventListener('click', changeTitleBlue)
green.addEventListener('click', changeTitleGreen)