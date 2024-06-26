// Add imports above this line
// Описаний в документації
import SimpleLightbox from 'simplelightbox'
// Додатковий імпорт стилів
import 'simplelightbox/dist/simple-lightbox.min.css'
import { galleryItems } from './gallery-items'

// Change code below this line

console.log(galleryItems)

const galleryContainer = document.querySelector('.gallery')

const itemsMarkup = createGalleryItemsMarkup(galleryItems)
galleryContainer.insertAdjacentHTML('beforeend', itemsMarkup)

// rendered items
function createGalleryItemsMarkup (items) {
  return items.map(({ preview, original, description }) => {
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

var lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt', captionPosition: 'bottom', captionDelay: 250
})

// const lightbox = new SimpleLightbox('.gallery a', {
//   captionsData: 'alt', captionPosition: 'bottom', captionDelay: 250
// })
