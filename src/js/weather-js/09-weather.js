import getWeatherByCityName from './weather-api.js'

console.log(12321);

const weatherFormEl = document.querySelector('.js-search-form')
const inputWeather = document.querySelector('.js-search-input')
// const searchBtn = document.querySelector('.search-btn')
const weahterWrapperEl = document.querySelector('.weahter-wrapper')

// const form = document.querySelector('.js-search-form')

const cityInputEl = weatherFormEl.firstElementChild

const convertSecondsToHoursAndMinutes = seconds => {

  const date = new Date(seconds * 1000);
  return `${`${date.getHours()}`.padStart(2, 0)}:${`${date.getMinutes()}`.padStart(2, 0)}`;

}

const handleWeahterFormSubmit = evt => {
  evt.preventDefault()
  console.log(inputWeather.value)
  // const searchQuery = inputWeather.value
  const searchQuery = cityInputEl.value.trim()

  console.log(searchQuery);

  if (!searchQuery) {
    return
  }

  // evt.target.firstElementChild.value = ''
  cityInputEl.value = ''

  getWeatherByCityName(searchQuery).then(data => {
    console.log(data)
    const enhanceData = {
      ...data,
      sys: {
        ...data.sys,
        sunrise: convertSecondsToHoursAndMinutes(data.sys.sunrise),
        sunset: convertSecondsToHoursAndMinutes(data.sys.sunset),
      }
    }
    console.log(enhanceData);
    weahterWrapperEl.innerHTML = createListItemsMarkup(enhanceData)
  })
    .catch(console.warn)
}
console.log(333999)

weatherFormEl.addEventListener('submit', handleWeahterFormSubmit)

//  weahterWrapperEl
let markup = ''
//  preventDefault()
function createListItemsMarkup (item) {
  return markup = `<div class="weather_card">
    <h2 class="city-name">${item.name}</h2>
    <ul class="weather-info-list">
      <li class="weather-info-item">
        <p class="temp"> Temperatyre: ${Math.round(item.main.temp)}&deg;C</p>
      </li>
       <li class="weather-info-item">
        <p class="feels_like"> Temperatyre feels like: ${Math.round(item.main.feels_like)}&deg;C</p>
      </li>
      <li class="weather-info-item">
        <p class="weather-wind">Wind: ${item.wind.speed}m/s</p>
      </li>
      <li class="weather-info-item">
        <p class="sunrise-time">Sunrise: ${item.sys.sunrise}</p>
      </li>
      <li class="weather-info-item">
        <p class="sutset-time">Sunset: ${item.sys.sunset}</p>
      </li>
      <li class="weather-info-item">
        <p class="clouds">Clouds: ${item.weather[0].description}</p>
      </li>
    </ul>
   </div>
`
}
// weahterWrapperEl.innerHTML = markup
