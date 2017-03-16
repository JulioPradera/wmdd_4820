/*
removing things from the todo list might be the most difficult part of this assignment
your interface is an HTML OL and you are removing an LI.
when you remove an LI you need to make sure that corresponding localStorage key value pair is removed.
to do this you need a method to associate LI tags with keys in your localStorage, or if you are converting
an array and storing this in localStorage you need to have some way of associating your array indices with your LIs 
*/
const form = document.getElementById('form')
const div = document.getElementById('outList')

const ls = localStorage

// get tha input from a form input text field on form submit
form.addEventListener('submit', (e) => {
  e.preventDefault()
  let formIn = document.getElementById('finput').value
  // calls createPTag function passing formIn
  createPTag(formIn)
})

// this event listener removes a p tag when it is click and the corresponding localStorage item
div.addEventListener('click', (e) => {
  if (e.target.tagName === 'P') {
    let item = e.target.getAttribute('id')
    // removes an item from localStorage p tag id corresponds with a localStorage key
    removeItem(item)
    e.target.remove()
  }
})

// add items to localStorage
function storeAdd(item) {
  // create a new key name using the value of length
  let key = ls.length
  ls.setItem(key, item)
  return key
}

// creates a p tag 
function createPTag(item) {
  let pTag = document.createElement('p')
  pTag.textContent = item
  // sets the p tags id attribute to the value of key returned by storeAdd, also passes item text to storeAdd function
  pTag.setAttribute('id', storeAdd(item))
  div.appendChild(pTag)
}

// removes an itme from localStorage 
function removeItem(item) {
  ls.removeItem(item)
}