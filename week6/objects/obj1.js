// method one
const person = function (first, last) {
  let obj = {
    name: first,
    lastName: last
  }
  return obj
}

let bob = person('bob', 'loblaw')

console.log(bob)

// method two
// this illustrates new shorthand in es6
const cat = (name, breed) => {
  let obj = {
    name,
    breed,
    talkCat() {
      console.log(`${name} is a ${breed}`)
    }
  }
  return obj
}

let moose = cat('moose', 'norwegian forest cat')

moose.talkCat()

console.log(moose)

// method three, constructor function
const Person2 = function (name, age) {
  this.name = name
  this.age = age

  this.info = () => console.log(`${this.name} is ${this.age} years old`)
}

let dani = new Person2("dani", 23)

dani.info()

// prototype
function Animal (name, species, sound) {
  this.name = name
  this.species = species
  this.sound = sound
}
// this is the the difference between this and the previous example
// using the prototype we can say that Animal is the prototype of talk
Animal.prototype.talk = function () {
  return `${this.name} the ${this.species} says ${this.sound}`
}

let splinter = new Animal('Splinter', 'rat', 'yum cheese')

console.log(splinter.talk())
