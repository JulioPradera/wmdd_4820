# week 6

## agenda
- more objects
- map
- json

## upcoming
- working with JS in the browser
- creating a project
- npm installing new modules

## project euler

This is a great resources for practice problems. 

[project euler](https://projecteuler.net/about)

## objects part 2

last week looked at the basics of working with objects in JavaScript.  
how to create a new object:
    
    let newObjt = {}

how to add a new property to an object:

    newObjt.name = 'Sahil'

how to update a property:

    newObjt.name = 'Jismon'

and how to delete a property:

    delete newObjt.name

this week we are going to look at a few more advanced things that you can do
with objects, as well as the new Map data structure in es6.

objects and object oriented programming are both big topics. There are whole
classes (no pun intended) on the subject, you have one next term using the Java
programming language. object oriented programming is a little different in JS,
so while we won't really go into too much detail, I just want you to keep this in the
back of your head as you move forward with your studies. The largest difference
is that JS makes use of prototypes, instead of classes. even the new class
keyword in es6 just abstracts prototypes, so it is a good idea to understand
prototypes if you want to really understand object oriented programming in JS.

for now let's look at couple of ways to create objects.

a common use of objects (and the basis of OOP) is that you create an object that
functions as a template, for an address book app for example. you are
essentially creating the same, or very similar objects over and over again.
name, phone number, email... as you know any time you are repeating yourself you
should wrap the functionality that you are repeating in a function. This would
of course be true for our address book app. to start with we are going to look
at creating new objects with a function. then we will very briefly introduce a
few more advanced concepts related to working with objects in JavaScript.

### a few keywords that you are likely to encounter today.

### new

we have seen the new keyword before, some of you have used it create arrays in
some of the labs. 

`let thingOne = new Map()`
`let thingTwo = new Array()`

"The new operator creates an instance of a user-defined object type or of one of
the built-in object types that has a constructor function."
[mdn
new](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/new)

new just creates a new object(remember that functions, arrays... are objects in
JS) you can create a new object of a built-in type, like an Array, or Map. you
can also create a new object with a constructor, an object defined by you.

### this

this in JavaScript can be very confusing, so don't feel bad if you don't get
this right away. this is tricky.

"In most cases, the value of this is determined by how a function is called.  
It can't be set by assignment during execution, and it may be different each time the function is called."  
> mdn

and when using this in es6 with arrow functions remember that:

"ES6 introduced arrow functions whose this is lexically scoped (it is set to the this value of the enclosing execution context)."  
> mdn

while this can be tricky generally the desired use of this in JavaScript is:

    let dog = function (name) {
      this.name = name
    }

and this would point to our dog.

[mdn
this](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/this)

[gentle explanation of this](https://rainsoft.io/gentle-explanation-of-this-in-javascript/)

### prototype

[understanding prototype](https://hackernoon.com/understand-nodejs-javascript-object-inheritance-proto-prototype-class-9bd951700b29#.24v8nhnql)

### Object.create

[Object.create](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/create)

### Object.assign

[Object.assign](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)

## Map

Objects in JavaScript are often compared to hash tables or hash maps, but they
are a little different. as of es6 JavaScript also has Map, which is far closer
to a hash map.

### when to use a Map over an Object

from mdn


- Are keys usually unknown until run time, do you need to look them up dynamically?
- Do all values have the same type, and can be used interchangeably?
- Do you need keys that aren't strings?
- Are key-value pairs often added or removed?
- Do you have an arbitrary (easily changing) amount of key-value pairs?
- Is the collection iterated?

"Those all are signs that you want a Map for a collection. If in contrast you have a 
fixed amount of keys, operate on them individually, and distinguish between their usage, 
then you want an object."
> [map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map)

## JSON

"JSON (JavaScript Object Notation) is a lightweight data-interchange format."  
> [json.org](http://www.json.org/)

The modern web is incredibly reliant upon JSON documents, from configuration
files to RESTful APIs, JSON is everywhere. JSON has become so popular because:
JSON as it says above, it is lightweight, it is just a plain text document after all.
JSON is easy to read.
JSON is composed of two very common data types, Arrays and Hash Maps so it is
easy to work with JSON data in most programming languages (not just JavaScript).


JSON looks like this:

    {
      "Name": "Dirk Gently",
      "Email": "dgently@holisticdetetive.com",
      "PhoneNumbers": [{
        "Location": "Cell",
        "Number": "555-555-5555" },
      { "Location": "Office",
        "Number": "555-555-1111"
      }
      ]
    }

### working with JSON in JavaScript

because JSON is more or less just JavaScript objects and arrays it is really
easy to work with in JavaScript.

You need to know two methods. JSON.parse() and JSON.stringify()

> The JSON.stringify() method converts a JavaScript value to a JSON string, 
optionally replacing values if a replacer function is specified, or optionally 
including only the specified properties if a replacer array is specified.
>> [mdn](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify)

> The JSON.parse() method parses a JSON string, constructing the JavaScript 
value or object described by the string. An optional reviver function can 
be provided to perform a transformation on the resulting object before it is returned.
>> [mdn](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse)


or in other words, JSON.stringify() writes JSON and JSON.parse() reads JSON.
