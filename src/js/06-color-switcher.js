//  

const startButton = document.querySelector('[data-start]')
console.log(startButton)
const stopButton = document.querySelector('[data-stop]')
console.log(stopButton)
const body = document.body
console.log(body)
let timerId = null

//
startButton.addEventListener('click', startSwitchColorBody)
stopButton.addEventListener('click', stopSwitchColorBody)

//
function startSwitchColorBody () {
  return timerId = setInterval(() => {
    let colorBody = getRandomHexColor()
    body.style.background = colorBody
    console.log(555)
  }, 1000)
}
//
//
function stopSwitchColorBody () {
  console.log(777)
  console.log(timerId)
  clearInterval(timerId)
}
// setInterval
//
//
function getRandomHexColor () {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`
}

//   asynchrony
