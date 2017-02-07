/*
 * this solution technically works,
 * but it has a few important problems:
 * 1) if data.json doesn't exist, it returns an error
 * 2) if a key already exists it is overwritten.
 * 3) ...
 */
const fs = require('fs')

let inputData = process.argv.slice(2)

let data = fs.readFileSync('data.json', 'utf8')

let obj = JSON.parse(data)

obj[inputData[0]] = inputData.slice(1)

writeObj = JSON.stringify(obj, null, 2)

let writeData = fs.writeFileSync('data.json', `${writeObj}`, 'utf8')

console.log(writeObj)
