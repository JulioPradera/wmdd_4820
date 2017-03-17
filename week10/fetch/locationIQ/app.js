const uri = 'https://locationiq.org/v1/search.php?key='
const apiKey = 'insert api key here'
const city = 'Toronto'
const country = 'Canada'

const cityData = []

fetch(`${uri}${apiKey}&format=json&city=${city}&country=${country}`)
  .then((res) => res.json())
  .then((data) => {
    console.log(data)
    console.log(data[0].display_name)
    console.log(`the longitude and latitude for this location are: lon ${data[0].lon} lat ${data[0].lat}`)
    // ...data is a rest operator
    cityData.push(...data)
  })
  .catch((e) => console.log(e, "what's happening dave?"))

  console.log('city data array', cityData)
