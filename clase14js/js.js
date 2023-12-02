/* alert('hola a todos!!');

//function expresada
function saludar(){
    let a = 20;
    console.log('hola, mundo!', a);
}

saludar();

//funcion declarada

const sumar = function(a, b){
    return a + b;
}

var resultado = sumar(3,5)
console.log(resultado); */
const sumar =(a,b,callback)=>{
    let resultado = a + b;
    callback(resultado);
}

sumar(15,12,function(resultado){
    console.log("el resultado es. " + resultado)});