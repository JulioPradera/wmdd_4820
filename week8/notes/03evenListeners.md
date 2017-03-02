# eventListener

an event listener is an extremely important part of working with the DOM, they
are used in things such as form submission, responding to button clicks, or
updating values based on the position of the mouse.

while you can create simple user interactions with just HTML and CSS, change the
color of a links text when you hover over it, for more complex task, like form
handling you need an event listener. eventListener() is a method that takes
three possible arguments, for now let's look at the first two. **type** this is
the type of event, 'click', 'submit', 'mouseenter'... there are a lot of [possible events](https://developer.mozilla.org/en-US/docs/Web/Events) 
some of them you will never use and you are certainly not required to remember
all of them for this course. the second argument is a function, this function
tells the DOM what to do when it receives an event.

    const btn = document.querySelector('#button')

    btn.addEventListener('click', () => btn.style.backgroundColor = 'pink')

as you can likely guess this turns the button pink when you click it. for a more
complex example see the tip calculator example.

