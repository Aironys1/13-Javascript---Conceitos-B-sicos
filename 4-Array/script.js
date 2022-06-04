let carro1  = 'Palio';
let carro2 = 'Uno';
let carro3 = 'Corolla';
let carro4 = 'Ferrari';


console.log(carro1, carro2, carro3,carro4);


let carros = ['Palio', 'Uno', 'Corolla', 'Ferrari'];
document.write(carros);
document.write("<br>"+carros[2]);
document.write("<br>"+carros[0]);


let motos = [
    'Suzuki',
    'Biz',
    'Mobilete',
    '150',
    function (){
        console.log('Testando 1 2 3...')
    }
]
motos[4]();
document.write(motos[4]);

document.write("<br>"+motos)


let ingredientes =[
    ['Uva','Pera','Maça'],
    ['Arroz','Macarrao']
]


console.log(ingredientes[1][0]); /// Pegando o primeiro item do Array

