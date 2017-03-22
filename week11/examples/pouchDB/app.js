/*
this is an only slightly modified version of the PouchDB get started docs.
*/

// create a new database named contacts
const db = new PouchDB('contacts')

// create a contact to put in the database
let newContact = {
  "_id": "mittens",
  "name": "Mittens",
  "cell": "555-555-5555"
}

// put the contact in the database
db.put(newContact)

// get a contact and log it to the console
db.get('mittens').then((doc) => {
  console.log(doc)
})
