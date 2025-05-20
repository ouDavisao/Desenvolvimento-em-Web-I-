// Variáveis JS

let x = 10;
const y = 20;
var z = 30;

if(true){
    let x = 100;    // diferente do x de fora
    var z = 300;    // sobrescreve o z de fora
    const y = 200;  // diferente do y de fora
    console.log("Dentro do bloco: ", x, y, z); //
}
console.log("Fora do bloco: ", x, y, z); //