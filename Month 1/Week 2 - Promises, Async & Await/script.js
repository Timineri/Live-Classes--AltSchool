// // setTimeId
// let timerId = setTimeout(() => {
//   console.log('Hello');
// }, 1000);
// clearTimeout(timerId);


// // setTimeInterval
// let timeId = setInterval(() => {
//   console.log('Hello');
// }, 1000);
// clearInterval(timeId);


// // A resolve
// let promise = new Promise((resolve, reject) => {
//   setTimeout(() => resolve('done'), 1000)
// });
// promise.then(result => console.log(result), error => console.log(error))



// // A reject
// let promise = new Promise((resolve, reject) => {
//   setTimeout(() => reject(new Error('Whoops!')), 1000)
// })
// promise.catch(result => (result), error => (error))


// // Using only one argument
// let promise = new Promise(resolve => {
//   setTimeout(() => resolve("done!"), 1000);
// });
// promise.then(alert); // shows "done!" after 1 second



// // using .finally which acts as a cleanup
// new Promise((resolve, reject) => {
//   setTimeout(() => resolve("value"), 2000);
// })
//   .finally(() => console.log("Promise ready")) 
//   .then(result => console.log(result)); 

  // new Promise((resolve, reject) => {
  //   throw new Error("error");
  // })
  //   .finally(() => console.log("Promise ready")) 
  //   .catch(err => console.log(err)); 


// fallback
// let name = undefined
// const defaultName = "defaultName"

// let newName = name || defaultName;
// console.log(newName)

// let newName2 = name && defaultName;
// console.log(newName2)

// undefined or null
// name === undefined || name === null ? defaultName : name

// let newName3 = name ?? defaultName;
// console.log(newName3)



// Promise
// Two major way to create a promise
// 1. promise constructor 2.async

// Promise Constructor
// // 1. Create your promise
// const promise = new Promise((res, rej) => {
//   // res(5000)
//   rej('Broken Fellow')
// })

// //2. return your promise in a function
// function testPromise () {
//   return promise
// }

// // 3. consume your promise, call fxn and attach .then
// testPromise().then((data) => {console.log(data)}). catch((err) => {console.log(err)})



// Example to ease all our troubles

// const lotteryGame = new Promise ((resolve, reject) => {
//     console.log('lottery is Happening')
//     setTimeout(() => {
//         let lottery = 0.1
    
//         if (lottery > 0.2) {
//             resolve('You won 😆');
//         } else {
//             reject(new Error(`You lost 😣`));
//         }
//     }, 5000)
//     })
  
//   function lotteryTester() {
//     return lotteryGame;
//   }
  
// lotteryTester()
// .then((res) => {
// console.log(res);
// })
// .catch((err) => {
// // err.message
// console.error(err.stack);
// console.log(err.message);
// })
// .finally(() => {
// console.log('I am done')
// });


// 2. async function
// function add(a, b) {
//   return a + b
// }
// let res = add(2, 3)
// console.log(res)


// async function addPromise(a, b) {
//   if (!b) {
//     throw new Error('b is not defined')
//   }
//   return a + b
// }
// addPromise(2, 3).then(res => {
//   console.log(res)
// }).catch(err => {
//   console.log(err.message)
// });

// async function were to be used with await
// IIFE - Immediately Invoked Function Expression and try and catch
(async function sayTheTruth() {
  try {
    console.log('instant')
    // const data = await fetch('httpz://api.github.com/users/oluwasetemi')
    // const result = await data.json()
    // console.log(result.login)
    const res = await addPromise(2)
    console.log(res)
    // we can now use await
  }
  catch(err) {
    console.log(err.message || err)
  }
})()




async function fetchData() {

  try {
   const response = await fetch('ghjjjj')
   if ()
   const data = response.json()
   return data.message
  } catch (error) {
    
  }
}