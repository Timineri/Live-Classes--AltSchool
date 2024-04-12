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


