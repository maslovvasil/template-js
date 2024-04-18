import getPhotosByName from './servise-API.js'

const searchForm = document.querySelector('.js-search-form')

searchForm.addEventListener('submit', onSearch)

function onSearch (evn) {
  evn.preventDefault()

  getPhotosByName()

    
}
console.log(888);

// getPhotosByName()
// .then(data => {
// console.log(data)
// })
// console.log(getPhotosByName())
