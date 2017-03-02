# createElement

creating elements can be a little cumbersome, remember that the DOM is neither
HTML nor JavaScript specific. This can be a challenge with working with many
APIs, particularly ones that are made to be very general. While this obviously
has its advantages, it can also make for potentially repetitive and awkward
looking code. But before tackling that problem, let's look at how to create an
element.

## creating a list

let's assume that we are working with an HTML document with a UL tag and we want
to create a list item for the list.

first let's target the UL and store it in a variable.

    const myUL = document.querySelector('ul')

next let's actually create the list element.

    let myListEl = document.createElement('li')

next a list item is by default invisible, only the content contained within it
is visible, so we need to create some content.

    myListEl.textContent = "this is a new LI tag"

and finally we need to append the new li to the ul.

    myUL.appendChild(myListEl)

## cleaning this up a little

if for example you had an assignment to create an app, say a little todo list
app, you would probably want to create a lot more than one todo and store them
in a list in your document. as you know when you want to do something more than
once, you may want to consider putting it into a function.

    function addLi (text) {
      const ul = document.querySelector('ul')
      const li = document.createElement('li')
      li.textContent = text
      ul.appendChild(li)
    }

this function takes some text, creates an li tag, adds the text to it and
appends it to our ul. 

while this is not actually fewer lines of code, this is a very manageable
function. this function can certainly be improved upon, but this is easy to
understand and it will get the job done.
