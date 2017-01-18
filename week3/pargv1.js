// create a variable that contains the argument values from process.argv
const myVal = process.argv
//create an empty array
let myArr = []

// convert the 3rd value from process.argv to a number and push it to the empty array
myArr.push(Number(myVal[2]))
console.log(myArr)

// pass values using process.argv like this:
// node index.js 23 15
