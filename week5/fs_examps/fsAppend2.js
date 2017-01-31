const fs = require('fs')

// get a message from process argv and clean it up
const message = process.argv.slice(2)
const stringMsg = message.toString()
const printStr = stringMsg.replace(/,/g, ' ')

// get the current date in the format year, day, month
const today = new Date()
const day = today.getDate()
const month = today.getMonth()
const year = today.getFullYear()
const printDate = `${year} ${day} ${month + 1}`

const data = fs.appendFileSync('data.txt',
  `
${printStr}
the date is: ${printDate}
  `, 'utf8')

