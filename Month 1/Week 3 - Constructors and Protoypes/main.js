// Destructuring assignment
// Destucturing asssignment is a special syntax that allows us to unpack arrays or object into a bunch of variables.
let arr = ['Princess', 'Sonia',  'Kennedy']
// Unwanted elements can be thrown awa using the comma
let [first, , second, third] = arr;
console.log(arr)
// let [first, second, third] = 'Princess Sonia Kennedy'.split(' ')
console.log(first)
console.log(second)
console.log(third)
// A Shorter way to write what is above.
let firstName = arr[0]
console.log(firstName)
let secondName = arr[1]
console.log(secondName)
let thirdName = arr[2]
console.log(thirdName)

//…Actually, we can use it with any iterable, not only arrays:
let [a, b, c] = 'abc';
let [one, two, three] = new Set([1, 2, 3]);

//Assign to anthing on the left
let user = {};
[user.name, user.surname] = 'John Doe'.split(' ');
console.log(user.name)
console.log(user.surname)

// Looping with .entries
let pupilsData ={
    name: 'Kayla',
    age: 10
};
console.log(Object.entries(pupilsData))
for (const [key, value] of Object.entries(pupilsData)) {
    console.log(`${key} : ${value}`)
}