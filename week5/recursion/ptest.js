function isPrime (n) {
  if (n === 1) {
    return false
  } else if (n === 2) {
    return true
  } else {
    isPrime()
  }
}
