/*function sum(number1,number2) {
    return number1+number2
}*/
/*
const sun =(number1,number2) => number1 +number2;

console.log(sun(20,20));


*/


//const community = _ => "CollabCode";

//console.log(community())

//const double=number =>  number *2;

/*
const  sum =(year) =>
{ if (year >=18) {
    return 'Maior idade';
}
else{
    return 'Menor de  idade';
}
}


console.log(sum(20,10,10));
/*/
//funça oanionima não pode serexecutada pelo consle o navegador por segurança contra ckackers
//função se autochama
/*( () => {
const  getPerson=()=>{return{name:"Henri",eye:"blue",}}


console.log(getPerson());
}
)
()*/

(()=>{
    function Person() {
        this.year=0;
       // milisegundos
        setInterval(function () {
        
            this.year=this.year +1
            //this traduzido este
            console.log("Qual this?" ,this );

            console.log("Qual é a  idade?",this.year);

        },1000)
    }
    const p1 = new Person();
    const p2 = new Person();
    
})();