const newValues = process.argv
const mealCost = Number(newValues[2])
const tipPerc = Number(newValues[3])
const tipAmount = (tipPerc / 100) * mealCost
const total = tipAmount + mealCost
const outPut = `your total amount owing is $${total} with a ${tipPerc}% tip`

console.log(outPut)
