// using Map.

// create a new map.
let myMap = new Map()

// add values to a new map
myMap.set('key', 'value')
// with map you aren't limited to using strings and symbols for keys.
myMap.set(2, 'two')

// retrieve a value from map
console.log(myMap.get(2))

// you can easily get the size of a map
console.log(myMap.size)

myMap.set('name', 'lumpy space princess')

// you can iterate over a Map with forEach or for of
myMap.forEach((val, key) => {
  console.log(`${key}: ${val}`)
})

// you can remove a key value pair from a map with delete
myMap.delete('key')

myMap.set([2], [1, 2, 3])

console.log(myMap)

// and clear out a map with clear
myMap.clear()

console.log(`${myMap} this is myMap after clear`)

