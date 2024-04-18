function renderPhotos (data) {
  console.log(data)
  const dataHits = data.hits
  return dataHits.map(({ userImageURL, largeImageURL}) => {
    return `<li>
      <a class="gallery__item" href="${largeImageURL}">
        <img
          class="gallery__image"
          src="${userImageURL}"
          alt="description"
        />
      </a>
    </li>`
  }).join('')
}

function onSearch (e) {
  e.preventDefault()

  const searchQuery = e.currentTarget.elements.searchQuery.value

  console.log(searchQuery)

  getPhotosByName(searchQuery)
    .then(data => {
      console.log(data)
      const html = renderPhotos(data)
    // Додайте згенерований HTML до вашого DOM, наприклад:
    // document.getElementById('gallery').innerHTML = html
    })
    .catch(error => {
      // Обробка помилок, якщо вони виникнуть
      console.error('Помилка при отриманні фотографій:', error)
    })
}

// /////////////////////////////////////////
// ////////////////////////////////////////
// ///////////////////////////////////////

// console.log(888)
import getPhotosByName from './searchPhotos-API.js'

const searchform = document.querySelector('.js-search-form')
const gallery = document.querySelector('.gallery')
const loadMoreBtn = document.querySelector('.loadMoreBtn')

searchform.addEventListener('submit', onSearch)
loadMoreBtn.addEventListener('click', onLoadMore)

function onSearch (e) {
  e.preventDefault()

  const searchQuery = e.currentTarget.elements.searchQuery.value

  console.log(searchQuery)

  getPhotosByName(searchQuery)
    .then(data => {
      console.log(data)
      return data
    })
  console.log(data)
  return data.map(({ preview, original, description }) => {
    return `<li>
  <a class="gallery__item" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      alt="${description}"
    />
  </a>
</li>`
  }).join('')
}
// ///////////////////////////////////
// ////////////////////////////////////
// /////////////////////////////////////

// console.log(888)
import getPhotosByName from './searchPhotos-API.js'

const searchform = document.querySelector('.js-search-form')
const gallery = document.querySelector('.gallery')
const loadMoreBtn = document.querySelector('.loadMoreBtn')

searchform.addEventListener('submit', onSearch)
loadMoreBtn.addEventListener('click', onLoadMore)

let render = ''

function onSearch (e) {
  e.preventDefault()

  const searchQuery = e.currentTarget.elements.searchQuery.value

  console.log(searchQuery)

  function renderPhotos (data) {
    console.log(data)
    const dataHits = data.hits
    return render = dataHits.map(({ userImageURL, largeImageURL}) => {
      return `<li>
      <a class="gallery__item" href="${largeImageURL}">
        <img
          class="gallery__image"
          src="${userImageURL}"
          alt="description"
        />
      </a>
    </li>`
    }).join('')
  }

  getPhotosByName(searchQuery)
    .then(data => {
      console.log(data.hits)
      const html = renderPhotos(data)
      gallery.innerHTML = render
    })
}

function onLoadMore () {
  console.log(999777)
}
// ///////////////////////////////
// //////////////////////////////
// ///////////////////////////////

const API_KEY = '27808107-8f1452157e5133d5097f72be5'
let page = null
console.log('hello world!!!')
const BASE__URL = 'https://pixabay.com/api'

export const getPhotosByName = (param) => fetch(`${BASE__URL}/?key=${API_KEY}&q=${param}s&image_type=photo&page=${page}`)
  .then(res => {
    if (!res.ok) {
      throw new Error(res.status)
    }

    return res.json()
  })

export default getPhotosByName

import getPhotosByName from './searchPhotos-API.js'

const searchform = document.querySelector('.js-search-form')
const gallery = document.querySelector('.gallery')
const loadMoreBtn = document.querySelector('.loadMoreBtn')

searchform.addEventListener('submit', onSearch)
loadMoreBtn.addEventListener('click', onLoadMore)

// let render = ''
let searchQuery = ''; // Глобальна змінна для зберігання значення searchQuery
let page = ''

function onSearch (e) {
  e.preventDefault()

  searchQuery = e.currentTarget.elements.searchQuery.value; // Оновлюємо значення searchQuery
  page = 1

  console.log(searchQuery)

  getPhotos()
}

function onLoadMore () {
  page++
  getPhotos()
}

function getPhotos () {
  getPhotosByName(searchQuery)
    .then(data => {
      renderPhotos(data)
    })
}

function renderPhotos (data) {
  const dataHits = data.hits
  const html = dataHits.map(({ previewURL, likes, views, comments, downloads }) => {
    return `<div class="photo-card">
      <img src="${previewURL}" alt="" loading="lazy" />
      <div class="info">
        <p class="info-item">
          <b>Likes: ${likes}</b>
        </p>
        <p class="info-item">
          <b>Views: ${views}</b>
        </p>
        <p class="info-item">
          <b>Comments: ${comments}</b>
        </p>
        <p class="info-item">
          <b>Downloads: ${downloads}</b>
        </p>
      </div>
    </div>`
  }).join('')

  if (loadMoreBtn.classList.contains('hidden')) {
    gallery.innerHTML = html; // Оновлюємо галерею
  } else {
    gallery.insertAdjacentHTML('beforeend', html); // Додаємо нові фото до галереї
  }
}
// ////////////////////////////////////////////
// ////////////////////////////////////////////
// ///////////////////////////////////////////
// /  використання класів

class PhotoGallery {
  constructor () {
    this.searchform = document.querySelector('.js-search-form')
    this.gallery = document.querySelector('.gallery')
    this.loadMoreBtn = document.querySelector('.loadMoreBtn')
    this.searchQuery = ''
    this.page = 1

    this.searchform.addEventListener('submit', this.onSearch.bind(this))
    this.loadMoreBtn.addEventListener('click', this.onLoadMore.bind(this))
  }

  onSearch (e) {
    e.preventDefault()
    this.searchQuery = e.currentTarget.elements.searchQuery.value
    this.page = 1
    this.getPhotos()
  }

  onLoadMore () {
    this.page++
    this.getPhotos()
  }

  getPhotos () {
    getPhotosByName(this.searchQuery, this.page)
      .then(data => {
        this.renderPhotos(data)
      })
  }

  renderPhotos (data) {
    const dataHits = data.hits
    const html = dataHits.map(({ previewURL, likes, views, comments, downloads }) => {
      return `<div class="photo-card">
        <img src="${previewURL}" alt="" loading="lazy" />
        <div class="info">
          <p class="info-item">
            <b>Likes: ${likes}</b>
          </p>
          <p class="info-item">
            <b>Views: ${views}</b>
          </p>
          <p class="info-item">
            <b>Comments: ${comments}</b>
          </p>
          <p class="info-item">
            <b>Downloads: ${downloads}</b>
          </p>
        </div>
      </div>`
    }).join('')

    if (this.loadMoreBtn.classList.contains('hidden')) {
      this.gallery.innerHTML = html
    } else {
      this.gallery.insertAdjacentHTML('beforeend', html)
    }
  }
}

const photoGallery = new PhotoGallery()
