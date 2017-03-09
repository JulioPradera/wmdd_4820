// get items from input and add them to localStorage
const form = document.getElementById('form')

const ls = localStorage

// create an empty array
let mydb = []

// clear localStorage, don't include this in your code
ls.clear()

form.addEventListener('submit', (e) => {
  e.preventDefault()
  const inpt = document.getElementById('finput').value
  mydb.push(inpt)
  // add the array to localStorage under with JSON.stringify
  ls.setItem('list', JSON.stringify(mydb))
  // JSON.parse to retrieve the list as an array
  const outList = JSON.parse(ls.getItem('list'))
  console.log(outList)
})