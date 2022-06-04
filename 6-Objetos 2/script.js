let carro = {
    nome:'Fiat',
    modelo:'Uno',
    valor:'R$ 35.000 ',
    peso:'1.200 Kg',
    ano:2015,
    estoque:50,
    ligado:false,
    ligar: function(){
        this.ligado = true;
        console.log("VRRUMM VRRUMMM")
    },

    acelerar: function(){
        if(this.ligado == true){ 
        console.log("Rihhhhhhhh Rihhhhhhhh");
        } else {
            console.log(this.nome+" "+ this.modelo + " " +"Carro desligado")
        }
    }
    
}

carro.ligar();
carro.acelerar();


// Objetos dentro de Arrays 

let carros2022=[
    {
        nome:'Fiat',
        modelo:'Uno',
    },
    {
        nome:'Fiat',
        modelo:'Palio',
    },
    {
        nome:'Toyota',
        modelo:'Corolla',
    },
    {
        nome:'Ferrari',
        modelo:'Spider',
    },
    {
        nome:'Mercedes',
        modelo:'Mercedes Benz',
    }
];


console.log(carros2022);
console.log(carros2022[2].modelo)


console.log(carros2022[3].nome)