# promises

Asynchronous programming is a very important aspect of programming for the web.
JavaScript has several models for handling asynchronous programming, we have
already seen callbacks, and discussed some of the pitfalls of callbacks, most
notably the 'pyramid of doom' or 'callback hell'. As of ES7 JavaScript has
several new models for asynchronous event handling, today we are going to look
at promises. 

## the promise life cycle

a JavaScript promise, much like a promise between two humans can be one of three things

- pending
- fulfilled 
- rejected

When the promise is made but nothing has happened it is pending. If everything goes according to plan your promises is fulfilled. And if something goes wrong, your promise is rejected.

in the context of todays class the promise, is that fetch is going to go out and fetch us some data, when it has, if the service endpoint we requested exists and we get some data the promise is fulfilled. If however we perhaps enter a URI incorrectly the promis is rejected. We will get an error message.

Promises have a few methods for moving through the stages of a promise, today we are going to look at *then* and *catch*

## then and catch

the .then() method is used to handle fulfilled promises and the .catch() method is used to handle rejected promises, or errors

    let myPromise = readFile('file.txt')

    myPromise.then((data) => console.log(data))
    myPromise.catch((error) => console.log(error))



## further reading

Nicolas Zakas' *Understanding Ecmascript 6, The Definitive Guide for JavaScript
Developers* CH 11

[mdn
promises](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Promise)  
[eric elliot, what is a promise](https://medium.com/javascript-scene/master-the-javascript-interview-what-is-a-promise-27fc71e77261#.m17kzqve6)
