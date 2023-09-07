function christmasCountdown() {
    const currentDate = new Date()
    const currentYear = currentDate.getFullYear()
    const christmasDate = new Date (`December 25, ${currentYear} 00:00`)
    const diff = christmasDate - currentDate

    const msSecond = 1000
    const msMinute = 60 * 1000
    const msHour = 60 * 60 * 1000
    const msDay = 24 * 60 * 60 * 1000

    const displayDay = Math.floor(diff / msDay)
    document.querySelector(".days").textContent = displayDay

    const displayHour = Math.floor((diff % msDay) / msHour)
    document.querySelector(".hours").textContent = displayHour

    const displayMinute = Math.floor((diff % msHour) / msMinute)
    document.querySelector(".minutes").textContent = displayMinute

    const displaySecond = Math.floor((diff % msMinute) / msSecond)
    document.querySelector(".seconds").textContent = displaySecond

    if ( diff <= 0) {
        document.querySelector(".days").textContent = 0
        document.querySelector(".hours").textContent = 0
        document.querySelector(".minutes").textContent = 0
        document.querySelector(".seconds").textContent = 0
        clearInterval(timerID)
        merryChristmas()
    }
}

let timerID = setInterval(christmasCountdown, 1000)

function merryChristmas () {
    const heading = document.querySelector('h1')
    heading.textContent = "MERRY CHRISTMAS!!!"
    heading.classList.add("ms")

}

const button = document.querySelector("#btn")
button.addEventListener("click", () => {
    const audio = document.querySelector("#mcAudio")
    audio.paused ? audio.play() : audio.pause() 
})
