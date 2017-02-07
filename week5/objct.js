let person = {
  name: 'Finn',
  age: 17,
  designation: 'the human'
}

let hobbies = ['exploring dungeons', 'playing video games', 'kissing princesses']

person.interests = hobbies

for (name in person) {
  console.log(`${name}: ${person[name]}`)
}
