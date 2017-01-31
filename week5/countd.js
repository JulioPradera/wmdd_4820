let countD = ((n) => {
  if (n === -1) {
    return
  }
  console.log(n)
  countD(n - 1)
})

countD(10)
