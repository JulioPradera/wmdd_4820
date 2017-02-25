# eslint config

by default eslint doesn't do anything, we need to first give it a set of rules.
these can be entirely configured by you, or you can use a popular package. i
prefer the latter and like the standard package. we can set this up with eslint
itself by passing it the --init flag

`./node_modules/.bin/eslint --init`

this will ask you a series of questions, just like setting up a package.json

for question one, select 'Use a popular style guide'

this takes you to question2 select 'Standard'

and finally 'JSON'

this will create a .eslintrc.json file.

## using package.json 

you can also use your package.json file to contain your config, you just have to
remember to install the extra packages used by standard. I have provided an
example of this in p_one
