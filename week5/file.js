const fs = require('fs')
//import fs from "fs"

let myObj = {
  a: 1,
  b: 2,
  c: 3
}

fs.writeFile('db.json', JSON.stringify(myObj, null, 2))
