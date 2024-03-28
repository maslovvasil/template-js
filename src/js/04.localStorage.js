// const form = document.querySelector('.feedback-form')

// const inputEmail = document.querySelector('input')
// console.log(inputEmail)
// const textareaText = document.querySelector('textarea')
// console.log(textareaText)
// const button = document.querySelector('button')
// console.log(button)

// form.addEventListener('submit', onFormSubmit)

// function onFormSubmit (e) {
//   e.preventDefault()

//   const formElements = e.currentTarget.elements
//   console.log(formElements)
//   const email = formElements.inputEmail.value
//   const comment = formElements.textareaText.value.trim()

//   console.log(email)
//   console.log(comment)

//   if (email === '' || comment === '') {
//     alert('Заповніть всі поля')
//   }
//   const formData = { email, comment}

//   console.log(formData)

//   form.reset()
// }

// const form = document.querySelector('.feedback-form')
// // const inputEmail = document.querySelector('input[type="email"]')
// // const textareaText = document.querySelector('textarea')
// // const button = document.querySelector('button')

// const formData = {}

// function onFormSubmit (e) {
//   e.preventDefault()

//   const formElements = e.currentTarget.elements

//   // Отримання значення поля вводу по індексу
//   const email = formElements[0].value; // Перше поле вводу
//   const comment = formElements[1].value.trim(); // Друге поле вводу (текстове поле)
//     console.log(email)
//     console.log(comment)
//   if (email === '' || comment === '') {
//     alert('Заповніть всі поля')
//     return; // Зупиняємо виконання функції, якщо не всі поля заповнені
//   }

//   const formData = { email, comment}

//   console.log(formData)

//   form.reset()
// }
// console.log(888665)
// const form = document.querySelector('.feedback-form')
// console.log(form)
// form.addEventListener('submit', onSubmitForm)

// function onSubmitForm (evt) {
//   evt.preventDefault()
//   //   email = evt.currentTarget[0].value
//   textarea = evt.currentTarget.value
//   console.log(textarea)
//   console.log(999777)
//     localStorage.setItem('local', textarea)

// }
// onSubmit() {
// const data = JSON.stringify(localStorage)
// // отправить data
// }
console.log(333)

const user = {
  name: 'Mango',
  age: 13
}

console.log(user)
console.log(JSON.stringify(user))
console.log(typeof (JSON.stringify(user)))
const saveData = '{"name": "Mango", "age": 13}'
console.log(saveData)
console.log(typeof (saveData))
const jsonData = JSON.parse(saveData)
console.log(jsonData)
console.log(typeof (jsonData))
