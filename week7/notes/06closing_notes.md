# final notes for the week

the steps described in the notes and example provided get you started with a
pretty basic project, we are going to build on this in the coming weeks with a
few actual web apps and we will add some complexity as we do this.

## exercise

try going through the steps provided on your own time and create another project
skeleton.

try using eslint on some of the code you have written for previous assignments.

## additional reading

[npm docs](https://docs.npmjs.com/)  
[A Beginner’s Guide to npm — the Node Package Manager](https://www.sitepoint.com/beginners-guide-node-package-manager/)

## git ignore node_modules

since you can easily install all of the dependencies in a package.json file it
is unnecessary to include your 'node_modules' directory in a github repository.
This is in fact considered bad practice. it is fortunately really easy to tell
git not to backup files and directories.

in your project directory create a `.gitignore` file and add `node_modules/` to
it, done.

## short cuts and templates

you may have noticed that there are a few things that you are likely to do a
lot. `npm run ...` and installing a linter testing server, maybe webpack...
installing the same packages for many of your projects. there are a few ways to
get around some of these.

### aliases in your shell config

take a look in your home directory `cd` `ls -a` you should have a '.bashrc'
file. open it up and you can add an alias for npm run

    # aliases
    alias nrun="npm run"

nrun could also be nr, reload your config `source .bashrc` now you can just type
`nrun start`.

### package.json template

save a package.json file that has scripts you use often, dependencies... and
copy it into a new file then run `npm install` every time you start a new
project. you could even create a package yourself that creates a package.json
and installs some of the packages that you use all of the time.

many javascript frameworks: React, VueJs... have tools that set up a basic project
skelton for you.

[vue-cli](https://github.com/vuejs/vue-cli)


there are other tips and tricks that you will pickup along the way to help
streamline this process.
