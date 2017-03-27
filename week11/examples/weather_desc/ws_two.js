// this would be the weather description retrieved from your API
const theCurrentWeather = 'The Weather Today is sunny'

// words to search for, each array in the object corresponds to an image
const weatherList = {
  sunny: ['sun', 'sunny', 'sun shine'],
  cloudy: ['cloudy', 'clouds', 'over-cast'],
  rain: ['showers', 'rain', 'downpour']
}

/*
  put the current weather into an array of its own 
  make every word lowercase
  so that we can test against each word 
*/
let theWeather = theCurrentWeather.toLocaleLowerCase().split(" ")

// iterate over the object
for (let wthr in weatherList) {
  // save the array in the variable arr for each iteration
  let arr = weatherList[wthr]
  // iterate over the weather array made from the description
  theWeather.forEach((x) => {
    // check to see if a word from the weather description corresponds to a word in the weather list.
    if(arr.includes(x)) {
      // instead of logging to the console these results would select an image
      console.log(`the weather is ${x}`)
    }
  })
}
