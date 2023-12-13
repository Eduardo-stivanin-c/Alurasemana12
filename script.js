//script

//use strick "encontra" os erros
"use strick";
/**console.log("Mandando oi pro amigo!");

function mandaMensagem() {

    console.log("Tudo bem?");
console.log("Vou te  mandar uma  solicitação!");
console.log("Solicitação recebida!");
}

setTimeout(mandaMensagem,5000)
console.log("Tchau tchau!");*/


var consultaCEP=fetch("https://viacep.com.br/ws/01001000/json").then(responta =>responta.json().then(r =>console.log(r)));

//console.log(consultaCEP);