let mySave = 550
let myTFS = 620
let myCheque = 1200

const myTotal = `i have $${mySave + myTFS} in my savings accounts combined and $${myCheque} in my chequing accout`

if ((mySave + myTFS) > 1000) {
  console.log(`i have $${mySave + myTFS} which is enough to go on a trip`)
} else {
  console.log(`i still need to save $${1000 - (mySave + myTFS)} before I can go on my trip`)
}

console.log(myTotal)
