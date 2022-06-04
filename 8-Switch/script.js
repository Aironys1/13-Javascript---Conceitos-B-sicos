let dia = 5;
let diaNome = '';

switch (dia) {
    case 1:
        diaNome = 'Segunda-Feira'
        break;
    case 2:
        diaNome = 'Terça-Feira';
        break;
    case 3:
        diaNome = 'Quarta-Feira';
        break;
    case 4:
        diaNome = 'Quinta-Feira';
        break;
    case 5:
        diaNome = 'Sexta-Feira';
        break;
    case 6:
        diaNome = 'Sábado';
        break;
    case 7:
        diaNome = 'Domingo';
        break;

    default:
        diaNome = '<br> <br>' + 'Não corresponde a nenhuma data.';

}

document.getElementById('dia').innerHTML = "Hoje é:" + diaNome;


let estudar = 10;
let mensagem = '';


switch (estudar) {
    case 1:
        mensagem = "<br><br>" + 'Módulo HTML';
        break;
    case 2:
        mensagem = "<br><br>" + 'Módulo CSS';
        break;
    case 3:
        mensagem = "<br><br>" + 'Módulo Java Script - 1';
        break;
    case 4:
        mensagem = "<br><br>" + 'Módulo Java Script - 2';
        break;
    case 5:
        mensagem = "<br><br>" + 'Banco de Dados';
        break;

        default:
            mensagem = "<br><br>" + "Escolha Não Válida";
}

document.getElementById('estudar').innerHTML = "Vamos estudar" + mensagem;