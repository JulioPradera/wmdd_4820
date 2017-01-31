# week5

## agenda
- more functions
- scope and the call stack
- objects
- reading and writing local files with the fs module

## the future
- more objects
- json

## functions

last week we looked at how to create and call a function, the basic syntax of
making functions. this week we are going to dive a little deeper into how
functions actually work and in doing so look at recursion and possibly closures.

### call stack

The call stack represents the space in memory being used by called functions.

    function add (a, b) {
      return a + b
    }

    add(3, 4)

when you call `add(3, 4)` your computer creates space in memory for two new
variables, a and b and they stay in memory until the function is complete.

    function one(a) {
      console.log(a)
      two(2)
    }

    function two (b) {
      console.log(b)
    }

    one(1)

the call stack for the code above would look a little like this:

|code  | stack |
|------|-------|
|one() | one   |
|two() | two   |
|      | one   |
|      | one   |

### scope

> One of the most fundamental paradigms of nearly all programming languages is the  
> ability to store values in variables, and later retrieve or modify those values.  
> In fact, the ability to store values and pull values out of variables is what  
> gives a program state.  
> Without such a concept, a program could perform some tasks, but they would be  
> extremely limited and not terribly interesting.  
> But the inclusion of variables into our program begets the most interesting  
> questions we will now address: where do those variables live? In other words,  
> where are they stored? And, most importantly, how does our program find them  
> when it needs them?  
> > *You Don't Know JS* Kyle Simpson

the scope of a variable or function is where it is accessible within your code.  
when you create a new function any parameters passed in, or variables create
within a function body are local(only accessible) to that function. 
A block inside a block has access to the variables created outside, or an inner block
can access variables created in outer block. 

as your programs get more complex you will see that this helps to prevent you
from creating variables that accidentally overwrite other variables.

**important es6 note**  
prior to es6 JavaScript was function scoped, only a function created a new
scope. but `let` and `const` are block scoped (anything in {}) so if you are
reading an older tutorial watch out for this.


### recursion
in simplest terms recursion is when a function calls itself. This sounds weird
at first and recursion can be difficult to wrap your head around, but there are times when
writing a recursive function is easier to understand than using loop.

    function recur(n) {
      recur(n - 1)
    }

## objects

We have technically been working with objects for a little while now. remember
that arrays in JavaScript are actually objects, so more accurately what we are
going to be doing today is looking at object literals. object literals are a data
structure that store data in a key value pair. That looks like this:  

    {one: 1, two: 2}

an object is a little like an array, only instead of your data being stored at
an index, it is attached to a key. in JavaScript this key is always a string,
although you can write it out without quotes. `{pet: 'cat'}`and you can use
numbers, but the they are implemented as strings, so this works too `{1: 'first', 2: 'second'}`. also unlike an
array an objects data is not stored in order. so using the previous object as an
example 1, isn't really before 2.

## fs(file system) reading and writing local files with node

file system, or fs as I will refer to it hereafter is a module wrapper around.

unlike methods and properties that we have used in our code so far the fs module
has to be imported before we can use it, this can be done with *require*.

    const fs = require('fs')

[nodejs file system docs](https://nodejs.org/dist/latest-v6.x/docs/api/fs.html)




