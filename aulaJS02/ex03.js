function saudacao(nome){
    return "Olá " + nome + ", seja bem-vindo!";
}

console.log(saudacao("Rafael"));

function operacao(num1, num2){
    console.log("Soma: " + (num1 + num2));
    console.log("Subtração: " + (num1 - num2));
    console.log("Multiplicação: " + (num1 * num2));
    console.log("Divisão: " + (num1 / num2));
    console.log("Resto: " + (num1 % num2));
    console.log("Potência: " + (num1 ** num2));
}

operacao(10, 20);