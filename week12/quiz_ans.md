# final quiz solutions

## 1
### a) What is the difference between '==' and '==='?

'===' is 'strict equality' it checks type and value whereas '==' only tests
value.

'5' == 5 // true
'5' === 5 // false

### b) What is event bubbling?

when an event, say a click, occurs on an element the event 'bubbles' up the DOM
to the parent then other ancestors. This allows for an event listener to be
placed on an OL tag that catches events on any LI tags that are children of the
OL.

## 2
### a)

    function person(name, age) {
      let obj = {
        name,
        age,
        sayName(){
          return `my name is ${this.name} and i am ${age} years old`
        }
      }
      return obj
    }
    
    let dan = person('dan', 42)
    
    let otherPerson = {
      name: 'max'
    }
    
    let newGuy = Object.assign({}, dan, otherPerson)
    console.log(newGuy.sayName())

output: my name is max and i am 42 years old

Object.assigns() reads left to right with new values overwriting previous
properties of the same name. so max replaces dan.

### b)

    function doSomething (str) {
      let newStr = ''
      for(let i = str.length-1; i >= 0; i--) {
        newStr +=str[i]
      }
      return newStr
    }
    
    let dBug = 'Grace Hopper'
    console.log(doSomething(dBug))

output: reppoH ecarG

the for loop counts down, or backwards through the string, a reverse function.  
[grace hopper](http://www.cs.yale.edu/homes/tap/Files/hopper-story.html)

## 3

    myArr = [1, 2, 2, 3, 4, 4]
Write a function that takes the above array, or any array, and returns a new array with 
the duplicates removed, ie [1, 2, 3, 4]. Hint: array.includes()

version one uses array.includes()

if you have something like this, good work.

    function remDup (arr) {
      let newA = []
      arr.forEach((x) => {
        if (!newA.includes(x)) {
          newA.push(x)
        }
      })
      return newA
    }

version two uses a rest parameter and set.
a set is a data type that contains unique values.
[mdn
set](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Set)

    function remDupSet (arr) {
      return [...new Set(arr)]
    }


## bonus
JavaScript data types

if you got all of these you got full marks, if you got most of these you got a
half mark.

- Boolean
- Number
- Null
- String
- Symbol
- Undefined

- Object
