//simple timer pass in a number, in seconds and timer will
//count to that number displaying each second

const timeTo = process.argv[2]
let elapsedTime = 0

const timer = setInterval(() => {
  if (elapsedTime >= (timeTo - 1)) {
    clearInterval(timer)
  }
  elapsedTime += 1
  console.log(`${elapsedTime} second`)
}, 1000)
