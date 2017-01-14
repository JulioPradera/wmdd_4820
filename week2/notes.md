# week 2 wmdd_4820

## agenda

- setup node environment in c9
  - nvm
  - node
  - intro to the terminal
- types and operators
- variables
- conditionals (if, else and else if)

## NVM
[nvm](https://github.com/creationix/nvm) is the 'node version manager'. This is
a relatively simple tool that will allow you to have multiple versions of node
on your machine and make it easy to switch between them. NVM comes installed
with the node version of C9, so you don't need to install it.

## node
[node](https://nodejs.org/en/) is a JavaScript engine, similar to those found in
a browser, in fact node uses the V8 engine that the chrome browser uses. For
the first few weeks of class we will be using node to run our JavaScript
programs. You can run a program in with node by using `cd` to change into the
directory where your JavaScript file is and run `node your_js_file.js`.

## types

JavaScript is a *loosely* typed or *dynamic* language. This just means that
types do not need to be explicitly declared, the type will be determined as the
program runs.

### primitive types

> A primitive (primitive value, primitive data type) is data that is not an
> object and has no methods.
> All primitives are immutable (cannot be changed).
>> [mdn note on
>> primitives](https://developer.mozilla.org/en-US/docs/Glossary/Primitive)

- boolean
- null
- undefined
- string
- number
- symbol (new in es6)

& the complex type **object**.

## operators and comparison

A large part of programming is getting a computer to make a lot of simple
calculations really fast; boring things that people don't want to do, and can't
do as quickly as a computer. In order to do this most languages come with all of
the usual operators and comparison tools that you would expect

2 + 2 (adds two numbers and returns the sum)
2 < 3 (comparison, returns a boolean)

[mdn
reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators)

### PEMDAS

order of operations:  

1. Parentheses (inside 'em)
2. Exponents
3. Multiplication and Division (from left to right)
4. Addition and Subtraction (from left to right)

## variables

a variable is a way to attach some data that you will want to use again in your
code, and maybe change often, to an identifier.

for example:

    let myBestTime = 22

this might be a variable that indicates how long it takes you to do some task
that is being repeated with the intent of decreasing the amount of time it takes
as you improve. When you get faster you can update this value(data).
This would allow you to update this once and have it updated everywhere in your
code.

variables are often described as 'named containers that hold some data'.

### naming variables

- variable names cannot be keywords, see link below for list of keywords.
- variable names can contain but not begin with a digit.
- variable names cannot begin with a symbol, except for $ and _
- variable names cannot contain spaces.
- variable names should be meaningful, if you are creating a variable that
  represents your savings account call it mySavingsAccount or something like
  that. Don't name it x. it will confuse you when you look at your code later.

## creating variables and assigning value

    let aVariable = 10
    const aConst = url

es6 has two new keywords for defining variables, 'let' and 'const'.

let  
use let when you know you are going to need to assign a new value to your
variable later in your code. let works really well in for loops(you will learn
about these next week)

const  
const means that the identifier can’t be reassigned.

generally JavaScript uses camelcase: `myVariableName` first word lowercase, all
subsequent words start with an uppercase letter. This is a convention, not a
rule but I would recommend sticking with it.

### keywords
[mdn
list](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar)

## comments

    // this is a comment in JS
    /* so is  
    this but on multiple lines*/

## conditionals

### control flow

generally speaking our programs are executed one line, or statement, after another.  
A conditional is a way to check some part of our code and do something different
depending on the value of a variable for example. Our code executes a different
route based on a boolean value.

there are a few ways of doing this in JavaScript, for now we are going to look
at: `if, if else and else`

    let x = 4

    if(x < 10){
      console.log('x is less than 10')
    } else {
      console.log('x is equal to or greater than 10')
    }

a conditional results in a boolean, the `if` part is checking if the expression
contained in the (parentheses) is *true* or *false*. if it is true the program will run the code in the
{curly braces} if it is false it moves down to the `else` and runs the code in the {curly braces} that
follow the `else`.


## template literals

Template literals are new syntax in es6, they make it a little easier and
cleaner to create strings that contain embedded expressions, multiple lines and
a few other features that we will see as we use them.

Template literals are created with the backtick character "` `" not to be confused
with single "' '".

    let aNum = 10
    let bNum = 5

    const total = `aNum + bNum = ${aNum + bNum}`
    console.log(total) // 'aNum + bNum = 15'
    console.log(`the value of aNum is ${aNum}`) // 'the value of aNum is 10'

[mdn
reference](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Template_literals)

## tips and tricks

There will already be a .bashrc in your home directory but you will have to
create .nvmrc.

Add node_modules path to bashrc

.bashrc
PATH=node_modules/.bin:$PATH

Add desired node version to your .nvmrc

.nvmrc
6.2.4
