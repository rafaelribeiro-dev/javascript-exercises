const clockContainer = document.querySelector('.clock-container')

const updateClock = () => {
  const present = new Date()

  const hours = String(present.getHours())
  const minutes = String(present.getMinutes())
  const seconds = String(present.getSeconds())

  const clockHTML = `
  <span>${hours.length === 1 ? `0${hours}` : hours}</span>
  <span>${minutes.length === 1 ? `0${minutes}` : minutes}</span>
  <span>${seconds.length === 1 ? `0${seconds}` : seconds}</span>
    `
  clockContainer.innerHTML = clockHTML
}

setInterval(updateClock, 1000)

console.log(dateFns)
