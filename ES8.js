// 2017 

const data = {
    frontent: 'Andres',
    backned: 'michael',
    desing: 'ana',
}

// disponemos del valor.length para saber cuantos elementos tiene un arreglo
const entries = Object.entries(data)
console.log(entries)
console.log(entries.length)

///////////// devuelve los valores de un objeto a un arreglo

const data = {
    frontent: 'Andres',
    backned: 'michael',
    desing: 'ana',
}

const values = Object.values(data);
console.log(values)
console.log(values.length)


///////  añade valores dentro de un arreglo

const string = 'hello';
console.log(string.padStart(7, 'hi'))
console.log(string.padEnd(12, '--------hi'))
console.log('food'.padEnd(12, '--------hi'))