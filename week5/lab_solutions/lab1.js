let numb = Number(process.argv.slice(2))

// define our function and pass the default value of 2 to a
function isPrime (n, a = 2) {

  // test if the number is less than or equal to one
  if (n <= 1) {
    return false
  }

  if (n > a) {
    if (n % a === 0) {
      return false
    } else {
     return isPrime(n, a + 1)
    }
  }
  return true
}

console.log(isPrime(numb))
