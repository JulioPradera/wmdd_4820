//object.create()
let human = {
  getGreeting() {
    return 'hello'
  }
}

let dog = {
  getGreeting () {
    return 'woof woof'
  }
}

let ohNoTheCarpet = {
  'poops': {value: 'poops on the carpet'}
}

let adam = Object.create(human)
console.log(adam.getGreeting())

let rex = Object.create(dog)
console.log(rex.getGreeting())

let fido = Object.create(dog, ohNoTheCarpet)

console.log(`fido ${fido.poops}`)
