
function exibirTexto(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function limparCampo(){
    let chute = document.querySelector('input');
    chute.value = '';
}

function verificarChute(){
    let chute = document.querySelector('input').value;
    tentativas++;

    if (chute == numeroSecreto){
        let palavraTentativa = tentativas == 1 ? 'tentativa' : 'tentativas';
        
        exibirTexto('h1', 'Acertou!');
        exibirTexto('p', `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`);
    
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute < numeroSecreto){
            exibirTexto('p', `O número secreto é maior do que ${chute}!`);
        } else {
            exibirTexto('p', `O número secreto é menor do que ${chute}!`);
        }
    }

    limparCampo();
}

function gerarNumeroAleatorio(){
    return parseInt(Math.random() * 100 + 1);
}

function iniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo()
    tentativas = 0;
    exibirTexto('h1', 'Jogo do Número Secreto!');
    exibirTexto('p', 'Digite um número de 1 a 100');
    console.log(numeroSecreto);
    document.getElementById('reiniciar').setAttribute('disable', true);
}

let tentativas;
let numeroSecreto;
iniciarJogo();
