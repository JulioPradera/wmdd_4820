# welcome to intro to JavaScript

## a quick look at the exciting and often confusing world of JavaScript

### the many JavaScript engines

if you google Python, or Ruby or Haskell; one of the first things to come up is
a .org address where you can download the tools to start writing programs in
that language. I specifically write tools, instead of language because this is
an important distinction. You are not downloading Haskell the language or
Python the language. You are downloading tools, usually a compiler or
interpreter(we will talk about these later), often a package manager and maybe a few other tools to help you
write programs in that language. But if you google JavaScript, the same is not
true, there is no javascript.org. So how do you get the tools to run JavaScript?
Well there are a few answers to that question. The most common answer is that
you probably already have the tools to run JavaScript, because you probably have
a modern browser on your computer. Again unlike the previously mentioned
programming languages there is not an 'official' set of tools for running
JavaScript, most browsers have different JavaScript engines. The good news is
that most of the time, the code that you write and test on a recent version of
Chrome, will probably run just fine with a recent version of Firefox. Another
answer to this question is Node, and the great thing about Node is that there is
a .org. If you go to nodejs.org there is a download option and downloading Node
will give you a set of tools much like the ones you would get for working with
Python or Haskell. You get a JavaScript engine, the V8 engine, which is also
the engine that Chrome uses, and a package manager NPM(more on this later) and a few other
tools like a REPL(we will talk about this soon too). For this reason we are
going to break from tradition and start working with Node instead of a browser.
Using Node is closer to working with any other programming language so if you
have done some programming in another language this will feel familiar, if you
have never written a line of code before, this would be strange no matter what. 
All of that said it is important to know that while Node is just a tool for running
JavaScript (not a Framework, or entirely different language). There is an
important distinction. Both Node and the engines that run in the browser contain
the same **Native Objects** these are the things that we will be focusing on as
this is an introductory class. They also both contain **Host Objects**, these
are things that are specific to the environment that they are run in. It makes
sense that you want a few slightly different tools for JavaScript in the browser
and JavaScript in a command-line. We will look at few of these as we go, but we
will focus on JavaScript basics, variables, functions arrays... all of that good
stuff. Eventually we will switch to the browser, and when we do we will revisit
Native and Host Objects. Now that we have that out of the way lets get some
tools set up so that we can start actually writing JavaScript.

## homework
create accounts for the following (both are free)  
[github](https://github.com/)  
[cloud9](https://c9.io/)

### working from your own laptop

if you want to work from your own laptop and not use cloud9 you will need the
following tools:

#### text editor
it doesn't matter which text editor, anything that you can write plain text
with. That said here are a few that are pretty good.
[atom](https://atom.io/)  
[sublime text](https://www.sublimetext.com/)  
[vim](http://www.vim.org/)

#### node
[node](https://nodejs.org/en/)  
and a package manager for node:  
[npm](https://www.npmjs.com/) npm is installed with nodejs by default, if you
feel adventurous you can try [yarn](https://yarnpkg.com/)

#### git
[git](https://git-scm.com/)

other tools will be discussed as we go, but having these three things installed
for the second class will allow you to follow along and work on the class labs.

#### windows users note

if you are using a laptop with a windows OS I will be using the bash terminal in
class and unix command-line commands. If you are not comfortable with working
with the command-line already I would strongly recommend that you use cloud9.

if you are using windows and would like to follow along you can use:  
[babun](http://babun.github.io/) or  
[cygwin](https://www.cygwin.com/)
