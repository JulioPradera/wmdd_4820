// function declaration
function add (a, b) {
  return a + b
}

// function expression
let subt = function (a, b) {
  return a - b
}

// arrow or 'fat arrow' function
// this will often appear as an anonymous function
let multipl = ((a, b) => a * b)

// calling (using) a function
console.log(add(2, 2))
console.log(subt(5, 3))
console.log(multipl(2, 6))

// IIFE
let x = ( function () {
  function add (a, b) {
    return a + b
  }
}();

