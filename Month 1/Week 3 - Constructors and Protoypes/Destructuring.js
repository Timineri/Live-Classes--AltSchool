// // Destructuring assignment
// // Destucturing asssignment is a special syntax that allows us to unpack arrays or object into a bunch of variables.

// //Array Destructuring
// let arr = ['Princess', 'Sonia',  'Kennedy']
// // Unwanted elements can be thrown awa using the comma
// let [first, , second, third] = arr;
// console.log(arr)
// // let [first, second, third] = 'Princess Sonia Kennedy'.split(' ')
// console.log(first)
// console.log(second)
// console.log(third)
// // A Shorter way to write what is above.
// let firstName = arr[0]
// console.log(firstName)
// let secondName = arr[1]
// console.log(secondName)
// let thirdName = arr[2]
// console.log(thirdName)

// //…Actually, we can use it with any iterable, not only arrays:
// let [a, b, c] = 'abc';
// let [one, two, three] = new Set([1, 2, 3]);

// //Assign to anthing on the left
// let user = {};
// [user.name, user.surname] = 'John Doe'.split(' ');
// console.log(user.name)
// console.log(user.surname)

// // Looping with .entries
// let pupilsData ={
//     name: 'Kayla',
//     age: 10
// };
// console.log(Object.entries(pupilsData))
// for (const [key, value] of Object.entries(pupilsData)) {
//     console.log(`${key} : ${value}`)
// }
// // Looping using Map
// let person = new Map();
// person.set('name', 'Timineri');
// person.set('sister', 'Sonia');
// person.set('brother', 'kennedy');
// console.log(person)
// for (const [key, value] of person) {
//     console.log(`${key} : ${value}`)
// }

// //swap variables trick
// let guest = 'jane';
// let admin = 'jon';
// [admin, guest] = [guest, admin]
// console.log(`${admin } : ${guest}`)

// //The rest ...
// let [name1, name2] = ['Julius', 'Ceasar', 'Emperor', 'The roman empire']
// console.log(name1)
// console.log(name2)
// // The other items are not stored in a variable but are lost
// let [name13, name4, ...rest] = ['Julius', 'Ceasar', 'Emperor', 'The roman empire']
// console.log(rest)

// // Default Values
// let [initial, final] = []
// console.log(initial)
// console.log(final)

// let [resolve = "resolve", reject = "reject"] = ['resolving']
// console.log(resolve)
// console.log(reject)



// //Object Destructuring
// let {var1, var2} = {var1:…, var2:…}

// let measurementData = {
//     object: "Table",
//     length: 200,
//     height: 150
// }
// let {object, length, height} = measurementData;
// console.log(object)
// console.log(length)
// console.log(height)

// //OR 
// // The order doesn't matter

// let {height, object, length} = {object: "Table", length: 200, height: 150}
// console.log(object)
// console.log(length)
// console.log(height)

// // Assigning a property to a variable with another name
// /* The colon show 'what: goes where'. The property object 
// goes into o */ 
// // Default values present

// let measurementData = {
//     // object: "Table",
//     length: 200,
//     height: 150
// }
// let { object: o = 'TableDefault' /*object: o*/ , length: l, height: h, breadth = 250} = measurementData;
// console.log(o)
// console.log(l)
// console.log(h)
// console.log(breadth)

// // The rest pattern
// let measurementData = {
//     object: "Table",
//     width: 200,
//     height: 150
// };
// let {object, ...restOf} = measurementData;
// // now object="Table", restOf={width: 200, height: 150}
// console.log(object)
// console.log(restOf.width)
// console.log(restOf.height)


// // Without the let
// /* There is an error because the javascript thinks its a code block so we 
// have to wrap with a parenthesis*/

// // let title, width, height;
// // {title, width, height} = {title: "Menu", width: 200, height: 100};
// // console.log(width); 

// // This will work
// let title, width, height;
// ({title, width, height} = {title: "Menu", width: 200, height: 100});
// console.log(width); 


// Nested Destructuring
let options = {
    size: {
      width: 100,
      height: 200
    },
    items: ["Cake", "Donut"],
    extra: true
  };
  
  let {
    size: {
      width,
      height
    },
    items: [item1, item2], 
    title = "Menu" 
  } = options;
