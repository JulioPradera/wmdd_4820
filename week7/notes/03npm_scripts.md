# scripts

by default your package.json file contains a "scripts" object, and this contains
a test. you can create other scripts for common tasks, like building your
project or running the server that was just installed.

open up package.json go to the end of the test line and add a ',' remember that
you need commas to separate your key value pairs in a JS object.
on the line below enter the following:

`"start": "./node_modules/.bin/http-server"`

save your file and run your server.

`npm run start`

