/*
 * Метод setTimeout()
 */

// const log = () => {
//   console.log('Лог при вызове callback-функции через 3 секунды')
// }

/*
 * Асинхронность кода
 */

// console.log('До вызова setTimeout')

// setTimeout(log, 0)

// console.log('После вызова setTimeout')

/*
 * Очистка таймаута с clearTimeout()
 */

// const logger1 = time => {
//   console.log(`Лог через ${time}ms, потому что не отменили таймаут`)
// }

// const timerId = setTimeout(logger1, 2000, 2000)

// const shouldCancelTimer = Math.random() > 0.3

// console.log(shouldCancelTimer)

// if (shouldCancelTimer) {
//   clearTimeout(timerId)
// }

// // alert('Hello! I am an alert box!!')

// console.log(111)

// // let person1 = prompt('Будь ласка, введіть своє ім’я', 'Harry Potter')

// console.log(333)

// let person = prompt('Будь ласка, введіть своє ім’я', 'Harry Potter')
// let text
// if (person == null || person == '') {
//   text = 'Користувач скасував запит.'
// } else {
//   text = 'Слава Україні, ' + person + '! Як справи сьогодні?'
// }
// confirm("Натисніть кнопку!")

/*
 * Метод setInterval()
 */

// const logger = time => console.log(`Лог каждые ${time}ms - ${Date.now()}`)

// setInterval(logger, 2000, 2000)

/*
 * Очистка интервала с clearInterval()
 */

// console.log('До')

// let subscriptionCounter = 0
// let hasSubscribed = false

// const intervalId = setInterval(() => {
//   if (subscriptionCounter === 3 || hasSubscribed) {
//     console.log('Останавливаем интервал')
//     clearInterval(intervalId)
//     return
//   }

//   console.log('Подпишись на рассылку!')
//   // hasSubscribed = true
//   subscriptionCounter += 1
// }, 1000)

// console.log('После')

console.log(888777)

const notification = document.querySelector('.js-notification')
const NOTIFICATION_DELAY = 3000
let timerId = null

notification.addEventListener('click', onNotificationClick)

showNatification()

function onNotificationClick () {
  console.log('click on the button notification ')
  hideNotification()
  clearTimeout(timerId)
}

function showNatification () {
  notification.classList.add('is-visible')
  return timerId = setTimeout(() => {
    console.log('Close the alert automatically')
    hideNotification()
  }, NOTIFICATION_DELAY)
}

function hideNotification () {
  notification.classList.remove('is-visible')
}
