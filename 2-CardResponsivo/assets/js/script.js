const modal = document.querySelector('.modal-container');
const fade = document.querySelector('.manta');

function fechaModal(){
    fade.style.display = 'none';
    modal.style.display = 'none';
}

function verificaBotao(){
    if (modal.style.display == 'none'){
        modal.style.display = 'block';
        fade.style.display = 'block';
    }
    else{
        modal.style.display = 'none';
        fade.style.display = 'none';
    }
}