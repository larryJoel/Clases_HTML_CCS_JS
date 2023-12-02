//setTimeout();

console.log('inicio');
setTimeout(()=>{
    console.log('Ejecutar un setTimeOut, esto se va a hacer ejecutar una sola vez');
},5000);

//*********************
function mostrarMensaje(){
    document.getElementById('mensaje').innerHTML = 'Gracias por visitar mi sitio web..!';
}

setTimeout(mostrarMensaje,5000);

//*********************** */

let evento;
function saludar(){
    console.log('Hola mundo');
}

function iniciarSaludo(){
    evento = setTimeout(saludar, 2000);
}

iniciarSaludo();

//************************************ */
function cancelarSaludo(){
    clearTimeout(evento) //para cancelar el timeout que esta en la variable "evento"
};

/* setInterval(()=>{
    console.warn("Ejecutando un setInterval, esto se ejecuta indefinidamente cada cierto intervalo de tiempo")
},3000); */

let temporizador = setInterval(()=>{
    console.log(new Date().toLocaleDateString());
},3000);

clearTimeout(temporizador);
console.log('DEspues del clearTimeout');


iniciarSaludo()