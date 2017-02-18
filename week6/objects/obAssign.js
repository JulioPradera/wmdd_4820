/* example of Object.assign
  in example one lets say that we are making a video game and we want to be able to create 
  a new character with either a weak or strong attack abilitie. 
  */

let defense = {shield: true, armour: true}

let attackStrong = {sword: 100, axe: 90}

let attackWeak = {sword: 50, axe: 50}

let newWarrior = Object.assign({}, defense, attackStrong)

console.log(newWarrior)

// create an object by passing variables
let first = {name: 'Bruce'};
let last = {lastName: 'Wayne'};
let batman = Object.assign(first, last);

console.log(batman)

let test = (name) => {
  let obj = {
    name
  }
  return obj
}

let john = test('john')

console.log(john)

let testTwo = (name, age) => {
  let obj = {
    name,
    age
  }
  return obj
}

let tim = testTwo('tim', 54)
console.log(tim)

let newTim = Object.assign({}, tim, john)

console.log(newTim)
