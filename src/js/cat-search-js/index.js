import { fetchBreeds, fetchCatByBreed } from './catSearch-api'
import '../../css/cat-search.css'
import { Notify } from 'notiflix/build/notiflix-notify-aio'
// import SlimSelect from 'slim-select'
import 'slim-select/dist/slimselect.css'

console.log(888)

const selector = document.querySelector('select')
console.log('selector', selector)
const divCatInfo = document.querySelector('.cat-info')
const loader = document.querySelector('.loader')
const error = document.querySelector('.error')

let allBreedsId = []

loader.classList.replace('loader', 'is-hidden')
error.classList.add('is-hidden')
divCatInfo.classList.add('is-hidden')

// fetchBreeds()
//   .then(data => {

//     data.forEach(element => {
//       allBreedsId.push({ text: element.name, value: element.id })
//     //   console.log(allBreedsId)
//     })
//     console.log(allBreedsId)

//     allBreedsId.forEach(element => {
//       const option = document.createElement('option')
//       option.value = element.value
//       option.text = element.text
//       selector.appendChild(option)
//     })
//   })
//   .catch(onFetchError)

fetchBreeds()
  .then(data => {
    const allBreedsId = data.map(element => {
      return { text: element.name, value: element.id }
    })

    const options = allBreedsId.map(element => {
      const option = document.createElement('option')
      option.value = element.value
      option.text = element.text
      return option
    })

    options.forEach(option => {
      selector.appendChild(option)
    })
  })
  .catch(onFetchError)

console.log(allBreedsId)

selector.addEventListener('change', onSelectBreed)

function onSelectBreed (event) {
  loader.classList.replace('is-hidden', 'loader')
  selector.classList.add('is-hidden')
  divCatInfo.classList.add('is-hidden')

  const breedId = event.target.value
  fetchCatByBreed(breedId)
    .then(data => {
      loader.classList.replace('loader', 'is-hidden')
      selector.classList.remove('is-hidden')
      const { url, breeds } = data[0]

      divCatInfo.innerHTML = `<div class="box-img"><img src="${url}" alt="${breeds[0].name}" width="400"/></div><div class="box"><h1>${breeds[0].name}</h1><p>${breeds[0].description}</p><p><b>Temperament:</b> ${breeds[0].temperament}</p></div>`
      divCatInfo.classList.remove('is-hidden')
    })
    .catch(onFetchError)
}

function onFetchError (error) {
  selector.classList.remove('is-hidden')
  loader.classList.replace('loader', 'is-hidden')

  Notify.failure('Oops! Something went wrong! Try reloading the page or select another cat breed!', {
    position: 'center-center',
    timeout: 5000,
    width: '400px',
    fontSize: '24px'
  })
}

// new SlimSelect({
//   select: selector,
//   data: allBreedsId
// })
