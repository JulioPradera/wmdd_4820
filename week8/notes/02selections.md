# selecting DOM elements

there are a number of different ways to select elements of the DOM with
JS. The most common methods involve targeting IDs, Classes or Tags. Some of these
return a single node in your document, some will return 'an array-like
object'(we will come back to this). below are brief descriptions of some of the
more common methods for selecting elements.

## document.getElementById()

to select a DOM element by its id.

    const one = document.getElementById('one')

HTML IDs are unique identifiers, so this method returns a single item.

[mdn
reference](https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById)

## document.getElementsByClassName()

to select elements by their class name. This return an HTMLCollection, our first
array-like object. see the notes on array-like objects below.

    const two = document.getElementsByClassName('two')

[mdn
reference](https://developer.mozilla.org/en/docs/Web/API/Document/getElementsByClassName)

## document.getElementsByTagName()

like getElementsByClassName getElementsByTagName returns an HTMLCollection

    const tName = document.getElementsByTagName('p')

[mdn reference](https://developer.mozilla.org/en-US/docs/Web/API/Element/getElementsByTagName)

## document.querySelector()

querySelector, unlike the previous three examples does not target a specific
element, but rather accepts an argument which specifies which element to
select.

to select an id for example:

    const qSelectId = document.querySelector('#someID')

or to select a p tag:

    const pTag = document.querySelector('p')

you can use querySelector to select any DOM element, however it will only select
the first one that it encounters.

so if for example you have a page with multiple li tags in multiple lists and
you select 'li' it will return the first li only.

[mdn
reference](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector)

## document.querySelectorAll()

querySelectorAll does what you think it will do, it selects all of the
elements of a tag type, or with a given class. querySelectorAll returns a
NodeList, our second array-like object.

    const allPs = document.querySelectorAll('p')

[mdn
reference](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll)


## array-like object?

so what is an array like object? an array-like object is another data structure,
similar to a list. The primary difference is a NodeList and an HTMLCollection.
don't have all of the methods that an Array has. I will demonstrate this in
class with the developer tools console, I encourage you to take a look at these
as well. Because they don't contain all of the methods that a array object does
you will often see code that converts these data types to an array. 

Just like an array you can use square brackets to select the index of your list. for example:

    // return a NodeList containing all of the p tags
    const nList = document.querySelectorAll('p')
    // log the second item to the console
    console.log(nList[1])
