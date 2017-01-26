// initial value for while loop
let x = 10
// creating an array with a few values to loop over
let myarr = [1, 2, 3, 4]

// while loop count down 10 to 0
while (x >= 0) {
  console.log(x)
  x-- // short hand for subtract one from x
}

// for loop count down 10 to 0
for (let x = 10; x >= 0; x--){
  console.log(x)
}

// loop through an array log the values of the array
for (let i = 0; i < myarr.length; i++) {
  console.log(myarr[i])
}

// break keyword, break out of loop even when condition is still true
// the below loop exits when it reaches 7 and them break
for (let x = 0; x < 20; x++) {
  if (x === 7) {
    break
  }
  console.log(`x = ${x}`)
}
