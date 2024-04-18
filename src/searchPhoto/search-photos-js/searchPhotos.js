// import getPhotosByName from './searchPhotos-API.js'

// const searchform = document.querySelector('.js-search-form')
// const gallery = document.querySelector('.gallery')
// const loadMoreBtn = document.querySelector('.loadMoreBtn')

// searchform.addEventListener('submit', onSearch)
// loadMoreBtn.addEventListener('click', onLoadMore)

// let render = ''

// function onSearch (e) {
//   e.preventDefault()

//   const searchQuery = e.currentTarget.elements.searchQuery.value

//   console.log(searchQuery)

//   function renderPhotos (data) {
//     console.log(data)
//     const dataHits = data.hits
//     return render = dataHits.map(({previewURL, likes, views, comments, downloads}) => {
//       return `<div class="photo-card">
//   <img src="${previewURL}" alt="" loading="lazy" />
//   <div class="info">
//     <p class="info-item">
//       <b>Likes: ${likes}</b>
//     </p>
//     <p class="info-item">
//       <b>Views: ${views}</b>
//     </p>
//     <p class="info-item">
//       <b>Comments: ${comments}</b>
//     </p>
//     <p class="info-item">
//       <b>Downloads: ${downloads}</b>
//     </p>
//   </div>
// </div>`
//     }).join('')
//   }

//   getPhotosByName(searchQuery)
//     .then(data => {
//       console.log(data.hits)
//       const html = renderPhotos(data)
//       gallery.innerHTML = render
//     })
// }

// function onLoadMore () {
//   console.log(999777)
//   getPhotosByName(searchQuery)
//     .then(data => {
//       console.log(data.hits)
//       const html = renderPhotos(data)
//       gallery.insertAdjacentHTML('beforeend', render)
//     })
// }
// /////////////////////////////
// ///////////////////////////
// ///////////////////////////

// import getPhotosByName from './searchPhotos-API.js'

// const searchform = document.querySelector('.js-search-form')
// const gallery = document.querySelector('.gallery')
// const loadMoreBtn = document.querySelector('.loadMoreBtn')

// searchform.addEventListener('submit', onSearch)
// loadMoreBtn.addEventListener('click', onLoadMore)

// // let render = ''
// let searchQuery = ''; // Глобальна змінна для зберігання значення searchQuery
// let page = ''

// function onSearch (e) {
//   e.preventDefault()

//   searchQuery = e.currentTarget.elements.searchQuery.value; // Оновлюємо значення searchQuery
//   page = 1

//   console.log(searchQuery)

//   getPhotos()
// }

// function onLoadMore () {
//   page++
//   getPhotos()
// }

// function getPhotos () {
//   getPhotosByName(searchQuery)
//     .then(data => {
//       console.log(data.hits)
//       renderPhotos(data)
//     })
// }

// function renderPhotos (data) {
//   console.log(data)
//   const dataHits = data.hits
//   const html = dataHits.map(({ previewURL, likes, views, comments, downloads }) => {
//     return `<div class="photo-card">
//       <img src="${previewURL}" alt="" loading="lazy" />
//       <div class="info">
//         <p class="info-item">
//           <b>Likes: ${likes}</b>
//         </p>
//         <p class="info-item">
//           <b>Views: ${views}</b>
//         </p>
//         <p class="info-item">
//           <b>Comments: ${comments}</b>
//         </p>
//         <p class="info-item">
//           <b>Downloads: ${downloads}</b>
//         </p>
//       </div>
//     </div>`
//   }).join('')

//   if (loadMoreBtn.classList.contains('hidden')) {
//     gallery.innerHTML = html; // Оновлюємо галерею
//   } else {
//     gallery.insertAdjacentHTML('beforeend', html); // Додаємо нові фото до галереї
//   }
// }
// ///////////////////
// //////////////////////
// ////////////////////

import getPhotosByName from './searchPhotos-API.js'

const searchform = document.querySelector('.js-search-form')
const gallery = document.querySelector('.gallery')
const loadMoreBtn = document.querySelector('.loadMoreBtn')

searchform.addEventListener('submit', onSearch)
loadMoreBtn.addEventListener('click', onLoadMore)

let searchQuery = ''; // Глобальна змінна для зберігання значення searchQuery
let page = 1; // Починаємо з першої сторінки

function onSearch (e) {
  e.preventDefault()

  searchQuery = e.currentTarget.elements.searchQuery.value
  page = 1; // Скидаємо номер сторінки при новому пошуковому запиті

  getPhotos()
}

function onLoadMore() {
  if (!searchQuery) {
  return
  }
  page++; // Збільшуємо номер сторінки на 1
  getPhotos()
}

function getPhotos () {
  getPhotosByName(searchQuery, page) // Передаємо номер сторінки у функцію getPhotosByName
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
