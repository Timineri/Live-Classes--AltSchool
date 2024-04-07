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
