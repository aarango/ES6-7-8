//2019

let array = [1,2,3, [1,2,3, [1,2,3]]];

console.log(array.flat(2))  // me permite saber los niveles que tiene un arreglo

let array = [1,2,3,4,5];

console.log(array.flatMap( value => [ value, value*2]));

let hello = '     hello word';
console.log(hello);
console.log(hello.trimStart()) // elmina los espacios al incio del texto


let hello ='hello word            '
console.log(hello.trimEnd()) // elimina los espacios al final de texto

// optional catch

// transformar clave - valor en objeto

let entries = [["name", "Andres"], ["Age", 30]];

console.log(Object.fromEntries(entries));

///

let mySymbl = ' Esto es sun simbolo';
let symbol = Symbol(mySymbl);
console.log(symbol.description);


console.log('hola.  Andres')