// return an array with values between two numbers
range = []
function inRange (start, end) {
  start++
  if (start < end) {
    range.push(start)
    return inRange(start, end)
  }
  return range
}

console.log(inRange(2, 5))

