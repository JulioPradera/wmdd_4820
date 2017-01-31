const fs = require('fs')
const myDB = 'data.json'

let myData = {
  arrOne: [1, 2, 3, 4],
  a: 2
}

fs.writeFile(myDB, JSON.stringify(myData, null, 2))

fs.readFile(myDB, 'utf8', (err, data) => {
  if (err) {
    console.error(err)
  } else {
    printData = JSON.parse(data, null, 2)
    console.log(printData)
  }
})
