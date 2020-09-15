const  obj = {
    name: 'andres',
    age: 30,
    country: 'CO'
};

let { name, ...all} = obj;
console.log(name, all)
console.log( all)

const obj = {
    name: 'Oscar',
    age: 30
}

// Anido un objeto dentro de otro
 const obj2 = {
     ...obj,
     country: 'CO'
 }

 console.log(obj2)

 // Cuando termina un llamado

 const helloWorks = () => {
     return new Promise((resolve, reject) => {
         (true)
            ? setTimeout(() => resolve('Hola lo hice'), 3000)
            : reject(new Error('Test Error'))
     })
 }

 helloWorks()
    .then(response => console.log(response))
    .catch(error => console.log((error)))
    .finally(() => console.log('Finalizo'))   // sabemos cuando finaliza una promesa.


// Como agrupar bloques regex

const regexData =  /([0-9]{4})-([0-9]{2})-([0-9]{2})/
const match = regexData.exec('2020-14-20')

const year = match[1]
const month = match[2]
const day = match[3]

console.log(year, month, day)



