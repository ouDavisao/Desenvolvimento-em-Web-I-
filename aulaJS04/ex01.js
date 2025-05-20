const soma = function (a, b){
    return a + b;
};

console.log(soma(5, 9));

const pessoa = {
    nome: "Davi",
    idade: 19,
    email: "daviarm@unipam.edu.br",
    saudar: function(){
        return "Oi, meu nome é " + this.nome + " e este é o meu email: " + this.email + "." 
    }
}

console.log(pessoa.nome);
console.log(pessoa.saudar());
