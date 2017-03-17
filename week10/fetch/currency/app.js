const url = 'https://api.fixer.io/latest?base='
const base = 'USD'

fetch(`${url}${base}`)
  .then((res) => res.json())
  .then((data) => console.log(data.rates.CAD))
  .catch((e) => console.log(`${e} something is donkin' up your wiz biz`))