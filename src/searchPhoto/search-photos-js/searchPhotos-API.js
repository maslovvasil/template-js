const API_KEY = '27808107-8f1452157e5133d5097f72be5'
let page = null
console.log('hello world!!!')
const BASE__URL = 'https://pixabay.com/api'

// console.log(678)

// const options = {
//   headers: {
//     Authorization: API_KEY
//   }
// }

// fetch(`https://pixabay.com/api/?key=${API_KEY}&q=yellow+flowers&image_type=photo`)
//   .then(res => res.json())
//   .then

// const getPhotosByName = () => fetch(`${BASE__URL}/?key=${API_KEY}&q=yellow+flowers&image_type=photo`)
//   .then(res => {
//     if (!res.ok) {
//       throw new Error(res.status)
//     }
//     return res.json()
//   })

// getPhotosByName()

// export default getPhotosByName

export const getPhotosByName = (query, page) => fetch(`${BASE__URL}/?key=${API_KEY}&q=${query}s&image_type=photo&page=${page}`)
  .then(res => {
    if (!res.ok) {
      throw new Error(res.status)
    }
    // console.log(res.status)
    // console.log(res.ok)
    const JS = res.json()
    console.log(JS)
    return JS
  })

export default getPhotosByName
