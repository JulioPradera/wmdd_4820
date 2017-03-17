# APIs

we have talked about APIs once or twice already, and they are likely to come up
a few more times in some of your other classes. APIs are everywhere, instagram,
twitter, online shopping... when we talk about an API in the context of web
programming generally what we are talking about is a REST API (i know; another
acronym). REST is Representational State Transfer and is really more a set of guidelines for web APIs than a technology, you will come back to this
in the server-side scripting class and look at this in greater detail then. for today we
just need to figure out how to get some data from a service using fetch, so that
we can use this data in a client side application.

when i say get data i more specifically mean information from a service as JSON
formatted data. We want to make an HTTP 'get' request, ask a service for some data on
a particular subject and we want that service to send us a file with a .JSON
extension. This isn't actually much different than going to a url and getting
some HTML, CSS and JavaScript.

If you would like a gentle video reminder of what an API is [what is an API](https://www.youtube.com/watch?v=s7wmiS2mSXY), please ignore the fact that it
is an advertisement, it is also a very short and relatively clear high level
overview of what an API is.

## working with an API

Now you know what an API is and have a new acronym to google. How do you
actually work with an API, how do you ask it for the data you want? This really
depends on the API, fortunately most of the good ones are relatively well
documented. They let you know the endpoints, addresses where the data you want
to access are and how to ask for it in a way that that particular API will
understand. We will look at the documentation of a few APIs in class and go through
the steps needed to find the data you are looking for and how to convert that data into
something that you can use in a program.

## API keys and security

Some APIs require that you have a key to access them. we will talk more about
keys in class, but I wanted to include a note here about being careful with your
keys. Sometimes an API is free for a certain number of requests a month, after
that they may start charging you. There are other security concerns associated
with keys as well and generally you should treat them the way you do your
passwords.
