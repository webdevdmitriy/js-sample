const addZero = num => {
  if (num <= 9) {
    return '0' + num
  }
  return num
}

const timer = (id, deadline) => {
  const getTimerRemaining = endTime => {
    const time = Date.parse(endTime) - Date.parse(new Date())
    const seconds = Math.floor((time / 1000) % 60)
    const minutes = Math.floor((time / 1000 / 60) % 60)
    const hours = Math.floor((time / 1000 / 60 / 60) % 24)
    const days = Math.floor(time / 1000 / 60 / 60 / 24)
    return {
      total: time,
      days,
      hours,
      minutes,
      seconds,
    }
  }

  const setClock = (selector, endTime) => {
    const timer = document.querySelector(selector)
    const hours = timer.querySelector('#hours')
    console.log(hours)
    const minutes = timer.querySelector('#minutes')
    const seconds = timer.querySelector('#seconds')

    const timeInrerval = setInterval(updateClock, 1000)

    updateClock()
    function updateClock() {
      const time = getTimerRemaining(endTime)
      days.textContent = addZero(time.days)
      hours.textContent = addZero(time.hours)
      minutes.textContent = addZero(time.minutes)
      seconds.textContent = addZero(time.seconds)

      if (time.total <= 0) {
        days.textContent = '00'
        hours.textContent = '00'
        minutes.textContent = '00'
        seconds.textContent = '00'

        clearInterval(timeInrerval)
      }
    }
  }
  setClock(id, deadline)
}
export default timer
