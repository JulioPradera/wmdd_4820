// create a new empty array
let arr1 = []

//create an array with a few values
let arr2 = [1, 2, 'one', [1, 2], 3]

// add to the end or an array
arr1.push(2)
console.log(`arr1 after push(2): ${arr1}`)

//add to the beginning of an array
arr1.unshift(1)
console.log(`arr1 after unshift(1): ${arr1}`)
// get the length of an array
console.log(arr1.length + ' arr1 length')

//remove from the end of an array
arr1.pop()
console.log(`arr1 after pop(): ${arr1}`)

//remove from the beginng of an array
arr1.shift()
console.log(`arr1 after shift(): ${arr1}`)

console.log('\narr2 using forEach:')
// use forEach method to loop over an array
arr2.forEach((item, index) => {
  console.log(`${index}: ${item}`)
})
