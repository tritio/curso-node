const numbers = [1,2,3,4,5];

const mapper = (arr, n) => {
    const result = arr.map((element, index) => {
        return element * n
    })

   return result;
}

console.log(mapper(numbers, 5))


const evenNumbers = (arr) => {
    const result = arr.filter((element, index) => {
        return element % 2 === 0
    })

    return result;
}

console.log(evenNumbers(mapper(numbers, 5)));

const multipleAndGetEvenNumber =  (arr, n) => 
    arr
        .map((element) => element * n)
        .filter((element) => element % 2 === 0);

console.log(multipleAndGetEvenNumber(numbers, 6))


// REDUCE

const sumOfAll = (arr) => arr.reduce((acumulador, elementoActual) => {

    console.log("acumulador: ", acumulador)
    console.log("elementActual: ", elementoActual)

    return acumulador + elementoActual;


}, 0)  // este cero es el valor inicial del acumulador, puede ser un número, un objeto, un array

sumOfAll(numbers)

// SORT


foods = ["apple", "orange", "bannana"];

const sorted = arr => {
    return arr.sort((a, b) => {
        if(a < b) return 1
        if (a > b) return -1
        else return 0;
    })
}

console.log(sorted(foods))