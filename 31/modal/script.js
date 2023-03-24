// document.getElementById('myModal').innerHTML = 'Selam';

let modal = document.getElementById('myModal');

let button = document.getElementById('myButton');

let closeBtn = document.getElementsByTagName('span')[0];

button.onclick = function (){
    modal.style.display = 'block';
}

closeBtn.onclick = function () {
    modal.style.display = 'none';
}

window.onclick = function (event) {
    if( event.target == modal ){
        modal.style.display = 'none';
    }
}