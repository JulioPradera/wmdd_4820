# what is the dom

> The Document Object Model (DOM) is a programming interface for HTML, XML and SVG
documents. It provides a structured representation of the document as a tree.
The DOM defines methods that allow access to the tree, so that they can change
the document structure, style and content. The DOM provides a representation of
the document as a structured group of nodes and objects, possessing various
properties and methods. Nodes can also have event handlers attached to them, and
once an event is triggered, the event handlers get executed. Essentially, it
connects web pages to scripts or programming languages.
>> [mdn
>> dom](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model)

let's take a look at the most important parts of that statement.

## a programming interface

you have no doubt heard of an API, but we haven't really discussed what an API
is yet in this class. In simplest terms an API is a set of rules that software
can use to communicate with other software. So in the context of this class,
both the DOM and JavaScript have a specification for 'getElementById()', they
have both been programmed so that they know what that is. APIs are everywhere
and are essential to most tasks that you perform with a computer daily, from
communicating with hardware like a keyboard, to retrieving data from a server.
We will look at another API when we talk about using 'fetch' to retrieve data
from a server.

## document as a tree or structured group of nodes

Understanding exactly what the DOM is can be tricky, people often mistakenly
think that it is simply the HTML in a webpage. The reason for this confusion is
that HTML is a very large part of the actual structure of the DOM. Both are used
to describe a webpage, the DOM just contains more detail and is organized
differently. the HTML describes the content on a page, an 'H1 tag', a 'UL tag' that contains
an 'LI tag' that contains an 'A tag'... a browser renders this description as a
tree structure (see diagram below) that contains nodes representing elements on
a page. Nodes can be actual elements like a 'div tag' or attributes and text.
using JS we can manipulate these nodes, change text, apply styles, even add and
remove nodes. these nodes, this flexible structure that we can manipulate,
rendered by the browser, this is the document object model.

![DOM diagram](DOM.png)
