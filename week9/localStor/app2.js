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

form.addEventListener('submit', (e) => {
  e.preventDefault()
  let formIn = document.getElementById('finput').value
  createPTag(formIn)
})

div.addEventListener('click', (e) => {
  if (e.target.tagName === 'P') {
    let item = e.target.getAttribute('id')
    removeItem(item)
    e.target.remove()
  }
})

function storeAdd(item) {
  let key = ls.length
  ls.setItem(key, item)
  return key
}

function createPTag(item) {
  let pTag = document.createElement('p')
  pTag.textContent = item
  pTag.setAttribute('id', storeAdd(item))
  div.appendChild(pTag)
}

function removeItem(item) {
  ls.removeItem(item)
}