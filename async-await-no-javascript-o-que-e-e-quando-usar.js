//async-await-no-javascript-o-que-e-e-quando-usar
/*async function pegaDados(){

    const  resultado= await fetch("https://api.github.com/users/omariosouto").then((res)=>res.json())
    const resultadoConvertido=await resultado.json;

    
    

    console.log(resultadoConvertido)
      
    }*/
/*

    async function pegaDados(){

    
        const resultadoConvertido= await fetch("https://api.github.com/users/omariosouto").then((res)=>res.json())
    
        
        
    
        console.log(resultadoConvertido)
          
        }*/



      //        Como usar Async/Await? Promises no JavaScript? Você NUNCA MAIS VAI ERRAR
        
     async   function testeSimple(){
    
            return 'da um like ai';

        }
          
        testeSimple().then((resposta)=>{
console.log(resposta)
        })