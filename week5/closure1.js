/*
 * closure example
 * from Eloquent JavaScript 2nd Ed.
*/
function multiplier (fact) {
  return ((num) => num * fact)
}

let twice = multiplier(2)
console.log(twice(5))

