// a not very useful tip calculator
const mealCost = 25
const tipPercent = 15
const tipAmount = (tipPercent / 100) * mealCost
const totalOwing = tipAmount + mealCost
const outPut = `your meal was $${mealCost} + a ${tipPercent}% tip = ${totalOwing}`

console.log(outPut)
