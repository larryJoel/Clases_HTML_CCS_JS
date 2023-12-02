/* alert('hola mundo') */

const frutas=['manzana', 'platano','naranja','uva'];
console.log(frutas);
console.log(frutas.at(3));
console.log(frutas.length);

const datos =['jose',23, 'true','calle falsa 123']
console.log(datos.at(2));
console.log(datos);
console.log(datos.length);

const personas = [
    {nombre: 'juan', edad:30},
    {nombre: 'juan', edad:30},
    {nombre: 'juan', edad:30}
]

console.log(personas);
console.log(personas.at(0));

const frutas2=['manzana', 'platano','naranja','uva'];
frutas2.push('mandarina');
frutas2.unshift('mango');
console.log(frutas2);
frutas2.pop()
console.log(frutas2);
frutas2.shift();
console.log(frutas2);

var frutitas = frutas.concat(frutas2);
console.log(frutitas);

var res = frutitas.join(' * ');
console.log(res);

const frase = 'hola como estas?';
const palabras = frase.split(',')
console.log(palabras);

console.log(frutitas);
var res = frutitas.sort();

var numeros = [1,10,14,58,14,120]

numeros.forEach(function(numero){
    console.log(numero);
})

const menordiez = numeros.every(function(numeros){
    return (numeros >= 1 && numeros <= 10) ? true : false;
})
console.log(menordiez);

const sum = numeros.reduce((total, value)=>total+value,0);
console.log(sum);

const oneAdded = numeros.map(num => num + 1);
console.log(oneAdded);