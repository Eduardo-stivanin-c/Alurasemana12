//script

//use strick "encontra" os erros
"use strick";
/**console.log("Mandando oi pro amigo!");
/*
function mandaMensagem() {

    console.log("Tudo bem?");
console.log("Vou te  mandar uma  solicitação!");
console.log("Solicitação recebida!");
}

setTimeout(mandaMensagem,5000)
console.log("Tchau tchau!");*/

/*
var consultaCEP=fetch("https://viacep.com.br/ws/01001000/json")
.then(responta =>responta.json())
.then(r =>console.log(r));


console.log(consultaCEP);
*/



async function buscarEndereco(cep) {
    var mensagemErro=document.getElementById('erro');

    try {
        
        var consultaCEP=await fetch(`https://viacep.com.br/ws/${cep}/json`)
        var consultaCEPConvertida=await consultaCEP.json();
        if (consultaCEPConvertida.erro) 
        {
        throw Error("CEP não existente!");

  
        }
      //var cidade 
      let cidade = document.getElementById('cidade');
      let logradouro=document.getElementById('endereco');
      let estado=document.getElementById('estado');

      cidade.value=consultaCEPConvertida.localidade;
      estado.value=consultaCEPConvertida.uf

logradouro.value=String(consultaCEPConvertida.logradouro);
        


console.log(consultaCEPConvertida)

return consultaCEPConvertida;
    }











     catch (erro) {
        mensagemErro.innerHTML=`<p> CEP inválido</p>`
        console.log(erro)
    }
}

/*
let ceps=['01001000','01001001'];
let conjuntoCeps=ceps.map(valores => buscarEndereco(valores));
Promise.all(conjuntoCeps).then(respostas => console.log(respostas));

*/

var cep=document.getElementById('cep');
cep.addEventListener('focusout',()=>buscarEndereco(cep.value))



