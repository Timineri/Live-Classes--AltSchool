//Rest Parameter
function sum(a,b) {
    return a + b;
  }
console.log( sum(1, 2, 3, 4, 5) );

// The dots simply means gather the remaining parameters into an array
function sumAll(...args) {
    sum = 0;
    for (const arg of args) {
        sum+=arg;
    }
    return sum;
}

console.log(sumAll(1, 2, 3))
console.log(sumAll(1, 2, 3, 4, 5))