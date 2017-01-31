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
numbers, but the they are implemented as strings, so this works too `{one: 'first', two: 'second'}`. also unlike an
array an objects data is not stored in order. so using the previous object as an
example *one*, isn't really before *two*.

creating an object is similar to creating an array, only you use `{}` instead of
`[]`  
    let myObj = { name: 'Nathan', age: 36 }

you have already seen how to call properties and methods in objects we have been
using the dot notation since day one `console.log()` you use this same method to
access data store in your own objects.

    console.log(myObj.name) // 'Nathan'

when you ask for data you ask for the key and the value associated with that key
is returned.

you can also use square brackets, like an array

    myObj["name"]

but you will most often see the dot notation that we have been using.

you can add a new key and value to an object like this:

    myObj.city = 'Vancouver'

you can remove an item from an object with the `delete` keyword

    delete myObj.city

## fs(file system) reading and writing local files with node

"File I/O is provided by simple wrappers around standard POSIX functions."  this
is the first line of the official docs at nodejs.org. There is a new acronym in
there and what do they mean by 'File I/O'? the fs module can do a lot more than
reading and writing to files, have a look at the official docs linked below to
see what it can do. for today we are just going to use it to read and write
files. stored locally (on the same computer our script is being run on) I am
also going to gloss over terms like asynchronous and callback function for now.
Although I encourage you to spend sometime with google and do a little reading
on both of those. They are both important parts of building web apps with
NodeJS, but as this is an intro course I feel like they take us down the rabbit
hole to more advanced topics. So today we are going to look at using the
synchronous method of reading and writing files, and synchronous just means one
thing at a time, start a job and finish it before moving on to the next one. 
but what about that POSIX thing? POSIX is the *Portable Operating System
Interface* in simplest terms(i write that a lot, i know) it is a series of
standards to help ensure that all UNIX like systems (Linux, BSD, Mac...) can use
the same shell and command-line tools. We are using Bash, and shell commands
like `ls` in Ubuntu (a linux distro) but these all of the things we have looked
at so far also work on a mac, and Bash is the default shell in MacOS.

so lets read and write some files.

unlike methods and properties that we have used in our code so far the fs module
has to be imported before we can use it, this can be done with *require*.

    const fs = require('fs')

if you look at the docs on nodejs.org you will see that among the many things
that can be done with fs, reading writing and appending to files are among them.
    fs.readFileSync()
    fs.writeFileSync()
    fs.appendFileSync()

because we are working with the synchronous methods our methods all include
'Sync'.  
write and append both look for the following (file, data, [options]) in the
example code that I have provided I am passing the option 'utf8' try taking this
out and see what happens.

read requires that you pass a file only (file, [options]) again I am passing
'utf8'.  the file is a file path and should be a string 'data.txt' for example.

[nodejs file system docs](https://nodejs.org/dist/latest-v6.x/docs/api/fs.html)




