var throttle = require('lodash.throttle')

let formData = {}
const form = document.querySelector('.feedback-form')
console.log(form)
const STORAGE_KEY = 'feedback-form-state'

form.addEventListener('submit', onFormSubmit)
form.addEventListener('input', throttle(inputsFormData, 500))

// ВІдсилаємо форму та очищуємо поля ввода

function onFormSubmit (evt) {
  evt.preventDefault()

  evt.target.reset()
  localStorage.removeItem(STORAGE_KEY)
}

//     Отримати дані з інпутів

function inputsFormData (evt) {
  formData[evt.target.name] = evt.target.value
  console.log(formData)

  localStorage.setItem('feedback-form-state', JSON.stringify(formData))}

populateFormData()

//   Відновити дані з localStorage

function populateFormData () {
  if (localStorage.getItem(STORAGE_KEY)) {
    const formData1 = JSON.parse(localStorage.getItem(STORAGE_KEY))

    for (const key in formData1) {
      form.elements[key].value = formData1[key]
    }
  }
}
