
// looping through localStorage

// localStorage can be stored in a variable
const ls = localStorage

// adding items to localStorage
ls.setItem('one', 'first item')
ls.setItem('two', 'second item')

// localStorage has a key method that retrieves the key name at a given index
console.log(ls.key(0))

// localStorage also has a length property
console.log(ls.length)

// we can use these to loop over localStorage with a for loop
for(let i = 0; i < ls.length; i++) {
  let key = ls.key(i)
  console.log(`key ${key} is ${ls.getItem(key)}`)
}