const YOUR_FAREWELL = 'Take care'

function farewell() {
  const text = document.querySelector("#cke_1_contents > div > div")
  const sendFarewell = document.querySelector('#send-message-button')
  text.innerHTML = YOUR_FAREWELL
  sendFarewell.click()
}
