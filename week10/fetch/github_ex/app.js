/*
write user data to the console
step one provide fetch with an endpoint, a location to grab data from.
step two convert it to a format we can work with and log it to the console
*/
const url = 'https://api.github.com/users/'
const user = 'fieldsoftrenzalore'

fetch(`${url}${user}`)
  .then((res) => res.json())
  .then((data) => console.log(data.name))
