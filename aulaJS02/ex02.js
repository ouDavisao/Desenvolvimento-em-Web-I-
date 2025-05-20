// Operadores em JavaScript

//soma,subtração, multiplicação, divisão, resto da divisão, potência.
console.log(5 + 3, 5 - 3, 5 * 3, 5 / 3, 5 % 3, 5 ** 3);

//console.log(typeof ('5' + 3));
console.log('5' + 3); // concatena

//console.log(typeof('5' - 3)); // subtrai
console.log('5' - 3); // subtrai
console.log('5' * 3); // multiplica
console.log('5' / 3); // divide

console.log(5 == 5); // igual
console.log('5' == 5);

console.log('5' === 5);

console.log(true && false); // e lógico
console.log(true || false); // e lógico

console.log(!true); // negação
console.log(!false); // negação

let num1 = 156;

if((num1 % 2) == 0){
    console.log("O número " + num1 + " é par"); 
} else{
    console.log("O número " + num1 + " é ímpar"); 
}
