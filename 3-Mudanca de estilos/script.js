function azul(){
    limpar();
    document.getElementById('titulo').classList.add('azul');
}
function verde(){
    limpar();

    document.getElementById('titulo').classList.add('verde');

}
function vermelho(){
    limpar();

    document.getElementById('titulo').classList.add('vermelho');

}

function limpar(){
    document.getElementById('titulo').classList.remove("azul")
    document.getElementById('titulo').classList.remove("verde")
    document.getElementById('titulo').classList.remove("vermelho")
}

// Mostrar telefone

function mostrarTelefone(elemento){
    elemento.style.display = 'none';
    document.getElementById('telefone').style.display = 'block';
}


function redeSocial(elemento){
    elemento.style.display = 'none';
    document.querySelector('.link').style.display = 'block';
}

document.querySelector('.link').style = " background:black;"



function verFoto(elemento){
    elemento.style.display = 'none';
    document.querySelector('.logo').style.display = "block"
}


function paginaAzul(){
    limpar2();
    document.querySelector('#fundo').classList.add('paginaAzul');
}
function paginaVerde(){
    limpar2();
    document.querySelector('#fundo').classList.add('paginaVerde');
}
function paginaVermelho(){
    limpar2();
    document.querySelector('#fundo').classList.add('paginaVermelho');
}


function limpar2(){
    document.querySelector("#fundo").classList.remove('paginaAzul') ;
    document.querySelector("#fundo").classList.remove('paginaVerde');
    document.querySelector("#fundo").classList.remove('paginaVermelho');
}