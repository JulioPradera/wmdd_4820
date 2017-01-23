# week3 wmdd_4820

## agenda
- node, browser differences
- arrays part one
- command line input with process.argv
- git and github (first repository)
- homework, see the labs_assignment.md file

## node, browser differences

Before now we have been focusing on the ways that node and a JS engine running
in the browser are the same, and I think that it is important to highlight this.
Often new JS developers think that node is a framework, or an entirely different
language, when in fact it is just JavaScript. But there are a few differences,
things that make node better suited to running on a local machine or on a
server. We are going to look at this a little today when we see process.argv

## array

an array is a data structure that stores data in an indexed list like object.
what that means is that an array is a way to attach a list of items(data) to a
variable, like this:

    let myArr = [1, 'a', 2, 'b']

an array is created with `[]`

when we first looked at variables we were attaching one thing, a number or word
to each variable. you can imagine that there are many instances where you want
to attach more complex data to a variable, an array is a data structure that can
be used for this. Arrays can store all of the data types that we looked at last
week as well a few other things, such as other arrays. An array inside an array
is referred to as a multi-dimensional array or a matrix. This is fairly common
in programming as it is a good way to represent things like a grid, or
spreadsheet.

    let myMultiArr = [
    [1, 2, 3],
    [4, 5, 6]
    ]

when a new item is added to an array it is automatically attached to an index
that locates the item within an array. think of an array as a container with
numbered slots, starting with 0. when you put something in these slots it can be
retrieved based on the number.

    [1, 2, 3, 4] // data in an array
    [0, 1, 2, 3] // indices of data in above array.

so if we ask for the data in index 1 we would get the value 2

    let myArr = [1, 2, 3, 4]
    myArr[0] // returns 1
    myArr[2] // returns 3

### array methods

for today we are only going to look at a few of the basic array methods.  
for a complete list [mdn
    arrays](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)


#### add an item to an array

    let myArr = ['one']
    myArr.push('two') // adds an item to the end of an array
    myArr.unshift('zero') // adds an item to the start of an array
    // myArr ['zero', 'one', 'two']

#### remove an item from an array

    myArr.pop() // removes the last item in an array
    myArr.shift() // removes the first item in an array

### array length

in JavaScript you can easily find the length of an Array with the length
property.

    let myArr = [1, 2]
    console.log(myArr.length)
    // returns 2


## process.argv

we have looked at how to test code in a REPL and how to write and run small
programs using `node my-file.js` but so far our programs have only been able to
print out calculations based on hard coded data. This isn't terribly useful,
most data either comes from a source such as an API or is input by a user. the
tip calculator from last week for example, to edit the cost of the meal and
percentage you wish to tip you need to open up the file and change the values.

process.argv is a way to pass argument variables to our program

[node
documentation](https://nodejs.org/dist/latest-v6.x/docs/api/process.html#process_process_argv)

## git and github

git is a popular version control system (VCS) that is most commonly used by
software developers to collaborate on projects. It is a relatively
easy way for a group to have easily updated and shared access to files. git was
first developed by Linus Torvalds in 2005.

github is an online repository for git projects. when you create a new project
with git you create a local copy that keeps track of changes made to the files.
These local files can be shared with other developers, github makes this process
a little easier and also provides a central backup for projects. github is also
a very popular method for sharing free software. A project can be 'cloned' from
github and built locally.

git is a tool for working with a repository, saving changes as you develop.

github is a place online where you can push a git repository to make a
backup or share your code with others.

