let obj = {
    name: 'oluwasetemi',
    age: 20,
  }
  
  // contructors
  function Person(name) {
    // let this = {}
    this.name = name
    // return this
  }
  
  const setemi = new Person('oluwasetemi')
  console.log(setemi)
  
  // classes - syntactic sugar of function constructor
  class Person2 {
    constructor(name) {
      this.name = name
    }
  }
  
  const setemi2 = new Person2('oluwasetemi')
  console.log(setemi2)
  
  let az = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  // new Array(1, 2, 3, 4, 5, 6, 7, 8, 9)
  console.log(typeof az)
  let str1 = 'oluwasetemi' // literal
  // new String('oluwasetemi')
  console.log(typeof str1)
  str1.repeat()
  
  let num = 20
  // new Number(20)
  num.toFixed(2)
  let bool = true
  // new Boolean(true)
  let obj2 = {
    name: 'oluwasetemi',
    age: 20,
  }
  // new Object({name: 'oluwasetemi', age: 20})


  // let user = {
//     name: 'Timi',
//     age: 25
// };

// user.sayHi = function() {
//     console.log('Hello!');
// };


// let user = {
//     name: 'Timi',
//     age: 25,
//     sayHi(){
//         console.log('Hallo')
//     }
// };

// console.log(user)
// user.sayHi();



// // Using the this keyword
// let user = {
//     name: 'Timi',
//     age: 25,
//     sayHi(){
//         console.log(this.name)
//     }
// };

// console.log(user)
// user.sayHi();



// // Using  predeclared funtion as a method
// let user = {
//     // ...
// };

// // first, declare
// function sayHi() {
//     console.log("Hello!");
// }

// // then add as a method
// user.sayHi = sayHi;
// user.sayHi()  




// let user = {name:'John'}
// let admin = {name: 'Admin'}

// function sayHello(){
//     console.log(this.name)
// }

// // Using the same function in two objects
// user.f = sayHello;
// user

// admin.f = sayHello;
// admin




// Prototypal Inheritance
// let animal = {
//     eats: true
//   };
//   let rabbit = {
//     jumps: true
//   };

// // Sets animal to be the prototype of rabbit
//   rabbit.__proto__ = animal;

// console.log(rabbit.jumps)
// console.log(rabbit.eats)



// let animal = {
//     eats: true,
//     walk() {
//         console.log('Animal walk');
//     }
// };

// let rabbit = {
//     jumps: true,
//     __proto__:animal
// }

// rabbit.walk




// // A longer prototype chain
// let animal = {
//   eats: true,
//   walk() {
//     alert("Animal walk");
//   }
// };

// let rabbit = {
//   jumps: true,
//   __proto__: animal
// };

// let longEar = {
//   earLength: 10,
//   __proto__: rabbit
// };

// // walk is taken from the prototype chain
// longEar.walk(); 
// alert(longEar.jumps);



// // Overides
// Protoype is used for reading properties
let animal = {
  eats: true,
  walk() {
      console.log('Animal walk');
  }
};

let rabbit = {
  jumps: true,
  __proto__:animal
}

rabbit.walk = function () {
  console.log('Rabbit Bounce Bounce')
}

rabbit.walk