const BASE__URL = 'https://api.openweathermap.org/data/2.5/weather'
const API__KEY = 'f8091ef84be2d5621027317140cce659'
const LANG = 'ua'
const METRICS = 'metric'

const getWeatherByCityName = cityName => fetch(`${BASE__URL}?q=${cityName}&appid=${API__KEY}&lang=${LANG}&units=${METRICS}`)
  .then(res => {
    if (!res.ok) {
      throw new Error(res.status)
    }
    console.log(res)
    return res.json()
  })
  //   .catch(console.log(warn))

console.log(888777)

export default getWeatherByCityName
