// // live_DK6HQeKYSgWq28zzNEXlRSxVSqzBwc1xXpCKUZKkDCgo3GWwunBRrZSuWAlrHkBo
// import axios from 'axios'

// axios.defaults.headers.common['x-api-key'] = 'live_DK6HQeKYSgWq28zzNEXlRSxVSqzBwc1xXpCKUZKkDCgo3GWwunBRrZSuWAlrHkBo'
// // https://api.thecatapi.com/v1/breeds

// export class catSearchAPI {
// #API_KEY
// }

// /////////////////////////////////////
// ////////////////////////////////////
// ///////////////////////////////////

// change the limit to however many images to use
// const url = `https://api.thecatapi.com/v1/images/search?limit=20`

// const url = `https://api.thecatapi.com/v1/breeds`
// const api_key = 'live_DK6HQeKYSgWq28zzNEXlRSxVSqzBwc1xXpCKUZKkDCgo3GWwunBRrZSuWAlrHkBo'

// fetch(url, {headers: {
//     'x-api-key': api_key
// }})
//   .then((response) => {
//     return response.json()
//   })
//   .then((data) => {
//     console.log(data)
//     let imagesData = data
//     imagesData.map(function (imageData) {
//       let image = document.createElement('img')
//       // use the url from the image object
//       image.src = `${imageData.image.url}`
//       //   console.log(image.src)

//   let gridCell = document.createElement('div')
//   gridCell.classList.add('col')
//   gridCell.classList.add('col-lg')
//   gridCell.appendChild(image)

//   document.getElementById('grid').appendChild(gridCell)
// })
//   })
//   .catch(function (error) {
//     console.log(error)
//   })

// /////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////

const BASE__URL = `https://api.thecatapi.com/v1`
const API__KEY = 'live_DK6HQeKYSgWq28zzNEXlRSxVSqzBwc1xXpCKUZKkDCgo3GWwunBRrZSuWAlrHkBo'

export function fetchBreeds () {
  return fetch(`${BASE__URL}/breeds?api_key=${API__KEY}`)
    .then(res => {
      if (!res.ok) {
        throw new Error(res.status)
      }
      console.log(res)
      return res.json()
    })
}

export function fetchCatByBreed (breedId) {
  return fetch(`${BASE__URL}/images/search?api_key=${API__KEY}&breed_ids=${breedId}`)
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status)
      }
      return response.json()
    })
}

// fetchBreeds()
// fetch(BASE__URL)
//   .then(res => {
//     if (!res.ok) {
//       throw new Error(res.status)
//     }
//     console.log(res)
//     return res.json()
//   })

// console.log(getCatBreeds)

// export default getCatBreeds
