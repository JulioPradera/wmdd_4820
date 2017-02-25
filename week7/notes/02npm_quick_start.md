# setting up a project with NPM

## step one

create a new project directory

`mkdir project_one`

and cd into it.

## step two

just like setting up a git repository you need to initialize a project
directory. this will create a package.json file and a node_modules directory

`npm init`

this will lead you trough a series of questions, they are all relatively self
explanatory and for now you can just hit enter to accept the defaults. this info
is used to create a package.json file which can be updated at any time. because
accepting the defaults is so common, there is a short-cut

`npm init -y`

this accepts all of the defaults and creates a new package.json

## step three

our project is really all setup and now it is time to start installing some
stuff.

`npm install [module_name]`

let's install a testing server as a developer
dependency.[http-server](https://www.npmjs.com/package/http-server)

`npm install http-server --save-dev`

after npm is done doing its thing take a look at package.json. there should be a
"devDepencies" object at the bottom of your json file with "http-server":
"version number"

`--save-dev` tells npm that we want to add this package to to our package.json
as a dependency, more specifically a developer dependency. dependencies are
separated into those require by the project code itself, and those that are
tools used by the developer in creating the package. let's install a few more
things.

`npm i eslint --save-dev`

this will install [eslint](http://eslint.org/), a popular linter (i have mentioned this a few times
before)

`npm i lodash --save`

this will install [lodash](https://lodash.com/). notice that this time we left
off the '-dev' this is because lodash is a package that is required for our app to
work, not just a tool that we will use to create our app. take another look at
package.json to see how these new packages have been added.
