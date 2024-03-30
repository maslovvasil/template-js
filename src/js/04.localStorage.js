import throttle from 'lodash.throttle'

// console.log(333555)

// const user = {
//   name: 'Mango',
//   age: 13
// }

// console.log(user)
// console.log(JSON.stringify(user))
// console.log(typeof (JSON.stringify(user)))

// const saveData = '{"name": "Mango", "age": 13}'
// console.log(saveData)
// console.log(typeof (saveData))

// const jsonData = JSON.parse(saveData)
// console.log(jsonData)
// console.log(typeof (jsonData))

// console.log(localStorage)

// localStorage.setItem('my-data', JSON.stringify(user))

// const getData = localStorage.getItem('my-data')
// console.log(getData)

// const parseData = JSON.parse(getData)
// console.log(parseData)

const form = document.querySelector('.feedback-form')
console.log(form)

const textareaText = document.querySelector('.feedback-form textarea')
console.log(textareaText)

const STORAGE_KEY = 'feedback-msg'

populateTextarea()

form.addEventListener('submit', onFormSubmit)
textareaText.addEventListener('input', throttle(onTextareaInput, 500))

function onFormSubmit (evt) {
  evt.preventDefault()

  console.log(999)
  evt.target.reset()
  localStorage.removeItem(STORAGE_KEY)
}

function onTextareaInput (evt) {
  evt.preventDefault()
  const message = evt.target.value
  console.log(message)

  localStorage.setItem(STORAGE_KEY, message)
  console.log(777)
}

function populateTextarea () {
  const saveMessage = localStorage.getItem(STORAGE_KEY)
  console.log(saveMessage)
  if (saveMessage) {
    textareaText.value = saveMessage
    console.log(saveMessage)
  }
}
