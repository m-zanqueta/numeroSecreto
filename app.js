function exibirTexto(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function verificarChute(){
    let chute = document.querySelector('input').value;
    console.log(chute == numeroSecreto ? "iguais" : "diferentes");
}

function gerarNumeroAleatorio(){
    return parseInt(Math.random() * 100 + 1);
}

exibirTexto('h1', 'Jogo do Número Secreto!');

exibirTexto('p', 'Digite um número de 1 a 100');

let numeroSecreto = gerarNumeroAleatorio();

console.log(numeroSecreto);