# week4 

## agenda
- in the coming weeks
- more array methods
- loops
- functions

## the future

### next week
- objects
- fs reading and writing to files
- functions part 2

## array methods

### slice

slice allows you to create a new array from part of an existing array by taking
a *slice* from the existing array.

    // arr.slice(start, end[optional])
    arr.slice(2)
    arr.slice(2,5)

### splice

splice allows you to remove and insert data into arbitrary locations in an array

    // arr.splice(start, num-items-delete, items-add[optional])
    let arr = [1, 2, 3, 4, 5]
    // remove 2 items starting at position 2
    arr.splice(2, 2) // [3, 4] [1, 2, 5]
    // start at position 1, remove 0 items, add the value 3
    arr.splice(1, 0, 3) // [] [1, 3, 2, 5]

### forEach

forEach is a method for looping over an array. There are pros and cons to using
this over a for loop to loop over an array.

forEach syntax looks a little cleaner, easier to read and interpret, this
produces less errors.

for loops are more efficient, less computationally expensive.

there isn't a hard and fast rule of when to use a for loop over forEach, but I
tend to use forEach when I can and have yet to change code to make it run
faster. other people recommend using it only when you know you will be working
with an array of a limited relatively small size. and some people go so far as
to say never use it.


    let arr = [1, 2, 3, 4]
    arr.forEach()

## loops

a loop is a way to repeat a small section of code while a condition is true when
returned as a boolean.

### while

    while (true) {
      // do this
    }

    let x = 10
    while (x >= 0) {
      console.log(x)
      x-- // shorthand for x = x - 1
    }

### for
    for (initialize; condition; increment) {
      // do this
    }

    for (let i = 10; i >= 0; i--) {
      console.log(i)
    }

### other loops

there are other loops too, we will probably see examples of some of these later.  
[do
while](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/do...while)  
[for
in](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in)  
[for
of](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Statements/for...of)

## functions

functions aren't entirely new. in fact you have been using functions a lot since
the first class. pop(), console.log()... are just two examples.

for today we are just going to look at the basics of writing and calling a
function. Next week we will look at how functions work in more detail.

a functions is a way to create a reusable chunk of code for things that you will
use again in your code.

    function name(parameters[optional]) 

think of parameters as variables local to your function. we will come back to
this next week when we talk about *scope* in more detail. but for now:

    function a (a) {
      console.log(a)
    }

    function b () {
      let b = 'b'
      console.log(b)
    }

these are essentially the same, the reason that you would want to use the first
version is that you can pass a new value when you call the function. again the
reason for writing a function is that you want to reuse it, maybe even with
different values.

    a('b')
    a('c')

functions can either produce a value or not:

    function one(x) {
      console.log(x)
    }

this does not produce a value, it doesn't create something new that you can use
later in your code.

    function two(x) {
      return x
    }

using the *return* keyword your function creates a value.  
the return keyword can only be used once per block({}).

an important note about function declarations:  
function declarations are hoisted, they are compiled first so you can call them
before defining them in your code. This is useful for organizing your code, you
may wish to have a bunch of related functions grouped together in your code.
you **can't** do this with a function expression.
