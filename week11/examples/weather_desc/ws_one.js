let weatherStr = 'The Weather Today is Sunny'
const sunArr = ['sun', 'sunny', 'sun shine']
let theWeather = weatherStr.toLowerCase().split(" ")

theWeather.forEach(x => {
  if(sunArr.includes(x)) {
    console.log('it is sunny')
  }
})
