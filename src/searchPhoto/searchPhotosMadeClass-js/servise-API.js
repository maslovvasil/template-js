// console.log(333)
const BASE__URL = 'https://pixabay.com/api'
const API_KEY = '27808107-8f1452157e5133d5097f72be5'
// // let page = 1

// function getPhotosByName () {
//   fetch(`${BASE__URL}/?key=${API_KEY}&q=yellow+flowers&image_type=photo&per_page=8&page=1`)
//     .then(res => {
//       if (!res.ok) {
//         throw new Error(res.status)
//       }
//       const js = res.json()
//       console.log(js)
//       return js
//     }).then(data => {
// console.log(data)
// })
// }

// export default getPhotosByName

class searchPhotosByName {
  fetchPhotos () {
    return fetch(`${BASE__URL}/?key=${API_KEY}&q=yellow+flowers&image_type=photo&per_page=8&page=1`).then(res => {
      if (!res.ok) {
      throw new Error(res.status)
      }
      return res.json()
    })
  }
}
