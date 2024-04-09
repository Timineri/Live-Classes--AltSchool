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