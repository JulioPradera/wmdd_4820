const form = document.getElementById('tipForm')
const meal = document.getElementById('mealCost')
const tip = document.getElementById('tipPercent')

form.addEventListener('submit', (e) => {
  e.preventDefault()
  const mealCost = meal.value
  const tipAmount = tip.value
  const tipTotal = (Number(tipAmount) / 100) * Number(mealCost)
  const mealTotal = Number(mealCost) + tipTotal
  document.getElementById('totalCost').textContent = `your meals total is $${mealTotal.toFixed(2)}`
  document.getElementById('tipT').textContent = `your tip is $${tipTotal.toFixed(2)}`
  meal.value = 'cost of meal'
  tip.value = 'tip percentage'
})
