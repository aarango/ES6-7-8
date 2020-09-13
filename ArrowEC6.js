let name = 'andres'
let age = 32

//ES5
obj = { name: name, age: age}

//ES6
obj2 = { name, age };
console.log(obj2)

const names = [
    {name: 'Andres', age:20 },
    {name: 'Juliana', age:27 }
]

let listOfNames = names.map(funtion (item){
    console.log(item.name);
})

let listOfName2 = names.map( item => console.log(item.name))

const listOfName3 = (name, ages, country) => {
    ...
}


// Promesas  /// EC6

const helloPromise = () => {
    return new Promise ((resolve, reject) => {
        if (true) {
            resolve('Good¡')
        }else {
            reject( 'Ups!!!')
        }
    })
}

helloPromise()
.then(response => console.log(response))
.then(() => console.log('hola'))
.catch(error => console.log(error))

// CLASES ES6

class calculator {
    constructor() {
        this.valueA = 0;
        this.valueB = 0;
    }
    sum (valueA, valueB) {
        this.valueA = valueA;
        this.valueB = valueB;
        return this.valueA + this.valueB
    }
}

const calc = new calculator();
console.log(calc.sum(2, 2))

//generedores  recuerda la asignación lógica de su ultimo estado
function* helloWorld () {
    if(true) {
        yield ' hello ';
    }

    if (true) {
        yield ' Andres'
    }
}

const generatorHello = helloWorld();
console.log(generatorHello.next().value); // Hello
console.log(generatorHello.next().value); // Andrés
console.log(generatorHello.next().value); 

