alert("Vamos usar lista com JS, OK ?");


let texto = '';

for(let i = 0; i <=10; i++) {
    texto = texto + i + '<br/> ' 
}

document.getElementById('demo').innerHTML = texto;



let carros = ['Ferrari','Fusca','Pálio','Corola','Kadette','Pirua'];
let html  = '<ul>';

for (let i in carros) {
    html += '<li>' + carros[i] + '</li>';
}

html += '</ul>';
document.getElementById("demo2").innerHTML = html;




