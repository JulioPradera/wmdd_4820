# bubbling and capturing (trickling)

just like in your HTML documents DOM elements can have parent, child, sibling...
nodes. an event that occurs on any node in the DOM 'bubbles up' going from the
node where the event was triggered to its parent and keeps
going up. we can use this to figure out which element was triggered by attaching an
event listener to a parent of this element, an OL tag for example.

to listen for this we need to use 'target'.

if we have this in our HTML
    <ol>
      <li>one</li>
      <li>two</li>
    </ol>

we can attach an event listener to the ol and get the list item that was clicked
on.

    const myList = document.querySelector('ol')

    myList.addEventListener('click', (event) => {
      console.log(event.target)
    })

assuming the above JS is attached to the above HTML when you open the HTML in a
browser and open up the console in the developer tools clicking on either of the
list items will log to the console the list item that was clicked.
