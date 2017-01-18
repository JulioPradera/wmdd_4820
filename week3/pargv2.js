// create a variable that contains process.argv values.
const testProcess = process.argv

for (let i = 0; i < testProcess.length; i++) {
  console.log(testProcess[i])
}

testProcess.forEach((val, index) => {
  console.log(`${index}: ${val}`)
})
