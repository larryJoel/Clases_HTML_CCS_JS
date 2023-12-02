
const titulo = document.querySelector('h1');
console.log(titulo);
titulo.innerHTML = "hola a ti Larry";

document.write('prueba de escritura directa')

const tecla =  document.createElement('div');
console.log(tecla);
tecla.innerHTML ='a ver si funciona...!' //REVISAR LA CLASE
//como se hace ahora
const nuevo = document.createElement('div');
var t = document.createTextNode('esto agrega texto dentro de un div creado en dom');
nuevo.appendChild(t);
nuevo.classList.add('vergacion')
document.body.appendChild(nuevo);



/* const items = document.getElementsByClassName ('li');
for (var i= 0; i<0; i++){
    let element =  items[i];
    console.log(element);
}

for (var i= 0; i<0; i++){
    let element =  items[i];
    element.style.color = "red"; //REVISAR LA CLASE
} */