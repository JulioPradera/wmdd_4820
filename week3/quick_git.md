# quick first git repository

the following is just a quick and dirty step 1, 2...
more detail will be provided in class.

## step one: .gitconfig

`git config --global user.name 'your name'`  
`git config --global user.email 'your email'`

## step two: create a directory for your project

`mkdir project_name`  
`cd project_name`

## step three: git init

`git init`

## step four: README.md

`touch README.md`

add something to your README.md with a text editor.

## optional step four-point-five: content

of course if this were a real project you would have something else in your
directory, your project files and folders. if you want you can create a few
empty files for now.

`touch index.js app.js`

## step five: git add

`git add file_name`  
or `git add .` this means add all

## step six: commit

`git commit -m 'first commit'`

## step seven: create a new github repository

to create a new github repository login to github and click the plus sign next
to your user image.

![new git repo](repo-create.png)

give your repository a name. you can leave the rest of the options on the
default settings. or add a short description.
- public
- don't initialize with README, you have already created a readme file.

go ahead and click 'create repository'

[image above and more detail](https://help.github.com/articles/create-a-repo/)

## step eight: copy and paste code

after clicking the 'create repository' button you will be taken to a page with a
few options for pushing a local repository to github. look for two lines that
look like the example below. copy and paste these **one at a time** into your
terminal.

    git remote add origin https://github.com/fieldsoftrenzalore/wmdd-notes.git
    git push -u origin master

that's it, if everything worked you have just pushed your first repository to
github, congratulations.
