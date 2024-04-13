// Function Expression => Arrow functions
let array = [0,1,2,3,4]
let sum = 0;


// function expression
let summation = function sumOfArray() {
    for (let index = 0; index < array.length; index++) {
     sum += array[index];
    }
    return sum;
 }
// console.log(summation())

// Arrow functions
let sumOfArray =  () => {
    for (let index = 0; index < array.length; index++) {
     sum += array[index];
        
    }
    return sum;
 }
console.log(sumOfArray())


//Callbacks functions
const callMeBack = function(prev, curr, index, arr){
console.log({prev, curr, index, arr})
}
array.reduce(callMeBack)


// Ternary Operators
        
// Property value shorthand for objects
// Version !
let Obj1 = (name, age) => {
    return{
    name,
    age
    }
}


// Version 2
let Obj2 = (name, age) => {
        return{
        name: name,
        age: age
        };
    };
    console.log(Object.values(Obj2))
// Version 3
let Obj3 = (name, age) => ({name,age});

//Objets
console.log(Obj3("Princess", 12))
let Obj = {};
Obj.name = "Timineri"
Obj['state'] = 'Bayelsa'
Obj

console.log('name' in Obj)
console.log('age' in Obj)

delete Obj.state
Obj


// // Object.keys, values and entries

// let user = {
//     name: 'John',
//     age: 30
// };

// console.log(Object.keys(user))
// console.log(Object.values(user))
// console.log(Object.entries(user))

// for (const value of Object.values(user)) {
//     console.log(value)
// }

// for (const value of Object.entries(user)) {
//     console.log(value)
// }


// // Doubling the prices
// let prices = {
//     banana: 1,
//     orange: 2,
//     meat: 4
// };
// let doublePrices = Object.fromEntries(
// Object.entries(prices).map(entry => [entry[0], entry[1] * 2])
// );

// console.log(doublePrices.banana)


// Function to return the number of properties
let user = {
    name: 'John',
    age: 30
  };

function count(obj) {
 let num =  Object.keys(obj).length
 return num
}
  console.log(count(user) ); 

// Sum the properties
let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
  };
    
 function sumSalaries() {
    sum = 0;
    for (const value of Object.values(salaries)) {
    sum+=value
    }
    return sum
 }
  
  console.log( sumSalaries(salaries) );