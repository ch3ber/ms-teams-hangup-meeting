// Input the time in 24h format
const MEETING_END_HRS = 15
const MEETING_END_MIN = 30

/*
* This field is optional.
* Set the time in ms.
* 1000 => 1 second
* 60000 => 1 minute
* 300000 => 5 minutes
* 600000 => 10 minutes
*/
const INTERVAL_CHECK = 60000

// +-------------+
// | script code |
// +-------------+

const date = new Date()
const currentHrs = parseInt(date.toLocaleTimeString().split(':')[0])
const currentMin = parseInt(date.toLocaleTimeString().split(':')[1])

const hangupBtn = document.querySelector('#hangup-button')

const interval = setInterval(() => {
  if (currentHrs > MEETING_END_HRS ) {
    hangupBtn.click()
    clearInterval(interval)
  }
  if (currentHrs === MEETING_END_HRS && currentMin >= MEETING_END_MIN) {
    hangupBtn.click()
    clearInterval(interval)
  }
}, INTERVAL_CHECK)
