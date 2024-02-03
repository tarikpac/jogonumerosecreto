let listaNumerosSorteados = []
let numeroSecreto = gerarNumero();
let tentativas = 1

let titulo = document.querySelector("h1")
titulo.innerHTML = "Jogo do número secreto";

let paragrafo = document.querySelector("p")
paragrafo.innerHTML = "Escolha um número entre 1 e 10";

function exibirTexto(tag, texto){
    let campo = document.querySelector(tag)
    campo.innerHTML = texto
}

exibirMensagemInicial()
function exibirMensagemInicial() {
exibirTexto("h1", "Jogo do NUMERO secreto!");
exibirTexto("p", "Escolha um numero 1 a 10");
}

function limparCampo() {
    chute = document.querySelector("input");
    chute.value = ""
}

function verificarChute() {
    let chute = document.querySelector("input").value
    if (chute == numeroSecreto) {
        exibirTexto("h1","Parabens, voce acertou o número")
        let mensagemTentativas = ("Voce descobriu o numero secreto com " + tentativas + " tentativas");
        exibirTexto("p", mensagemTentativas)
        document.getElementById("reiniciar").removeAttribute("disabled");}
    else {
        if (chute > numeroSecreto) {
            exibirTexto("p","Numero secreto é menor");
        } else {
            exibirTexto("p", "Numero secreto é maior");
        }
        tentativas++;
        limparCampo();
    }
    }

function gerarNumero() {
   let numeroEscolhido = parseInt(Math.random() * 10 +1);
   let quantidadeElementosLista = listaNumerosSorteados.length

    if (quantidadeElementosLista == 3){
        listaNumerosSorteados = []
    }
   if (listaNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumero();
   } else {
    listaNumerosSorteados.push(numeroEscolhido)
    return numeroEscolhido
   }
}

function reiniciarJogo(){
    exibirMensagemInicial()
    numeroSecreto = gerarNumero()
    limparCampo()
    tentativas = 1
    document.getElementById("reiniciar").setAttribute("disabled",true)
}