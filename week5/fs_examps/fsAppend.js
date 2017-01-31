const fs = require('fs')

let file = '\n this is some text \n'

const data = fs.appendFileSync('data.txt', `${file}`, 'utf8')
