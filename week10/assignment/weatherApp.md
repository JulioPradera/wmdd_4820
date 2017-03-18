# weather app

you are going to write a very minimal weather app.

your app should allow users to enter a location and should return information
about the current weather in their given location. your app should display the
information in weather description and the temperature in celsius.
using the information in weather description display an image that corresponds
to that information. for example:
if your weather description is 'cloudy'. display a cloud, if it is 'light drizzle'
display an umbrella or cloud with rain drops.

to do this you may need to create lists that contain multiple words
that correspond to different images. for example you want to display an
umbrella for the words rain, showers, drizzle... and possibly several others.

the array.includes() method may help with this
[mdn array includes](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/includes)

your app should display a minimum of 3 possible images, you can do more.

you may need a second API to get longitude and latitude data from country city
input, I have provided links to APIs that you can use for this purpose.

## to fetch or not to fetch

you don't have to use fetch, it is still relatively new and there are not many
tutorials. That said I would recommend trying to use fetch, the examples
provided should give you everything you need to complete the assignment.

a few other tools you may want to look at:  
[superagent](https://visionmedia.github.io/superagent/)  
[axios](https://github.com/mzabriskie/axios)  
or good ol' [XMLHttpRequest](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest)

## plan before writing any code

as with any coding task you should begin by breaking your program down into
smaller pieces, try to solve these pieces individually and build up from these
pieces.

### bonus marks

options to display:

- 5 day forecast
- display weather in metric or imperial


### ask questions early!

contact me early if you have any questions, send a link to your code on github
and be specific about the problems you are having.

## changing the html and css

you can make **small** changes to the html and css.

## what you are required to submit

1) a link to a new github repository.  
your github repository should include the following:
- index.html
- style.css
- app.js
- package.json
- README.md
- an img/ directory containing your weather icons

2) a link to your weather app deployed using surge or netlify.

## important links

### deployment

[surge](https://surge.sh/)  
[netlify](https://www.netlify.com/)

### free weather APIs

[weather underground](https://www.wunderground.com/weather/api/d/docs)  
[darksky](https://darksky.net/dev/docs)  
[open weather map](https://openweathermap.org/api)

### geocoding APIs

[locationIQ](https://locationiq.org/#docs)  
[open cage](https://geocoder.opencagedata.com/api#forward-resp)

### icons

both of these sites have free icons, but require you to create an account.  
you are welcome to use any free icons, or create your own.  
your icons should be consistent, I would recommend using icons from the same
pack.
please use svg or png files for your icons.  
[the noun project](https://thenounproject.com/)  
[flat icon](http://www.flaticon.com/)

## Due Date

I need to receive an email with links to github and netlify or surge by **Sunday
April 2nd** (before noon). There will be no further extensions granted
because I won't have time to get all of my marking done if I receive these any
later.  
This due date is for both sections of the class.
