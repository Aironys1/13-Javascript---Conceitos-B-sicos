let carro = {
    nome:'Fiat',
    valor:'R$ 35.000 ',
    peso:'1.200 Kg',
    ano:2015,
    estoque:50,
    ligar: function(){
        console.log("VRRUMM VRRUMMM")
    },

    acelerar: function(){
        console.log("Rihhhhhhhh Rihhhhhhhh");
    }
    
}

console.log("Modelo do carro: " + carro.nome);
console.log("Valor:"+carro.valor);
carro.ligar();
carro.acelerar();