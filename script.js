class Progress {
    constructor(options) {
        this.element = options.element
        this.circleMain = options.circleMain
        this.length = 2 * Math.PI * Number(this.circleMain.getAttribute("r"))
        this.circleMain.style.strokeDasharray = this.length
        this.isAnimate = false
        this.isHide = false
    }

    setValue(value) {
        const offset = this.length * (1 - value / 100)
        this.circleMain.style.strokeDashoffset = offset
    }

    setAnimate(flag) {
        this.isAnimate = flag
        this.setState()
    }

    setHide(flag) {
        this.isHide = flag
        this.setState()
    }

    setState() {
        let state = "normal"
        if (this.isHide) {
            state = "hide"
        } else if (this.isAnimate) {
            state = "animate"
        }
        this.element.dataset.state = state
    }
}

const progress = document.querySelector(".progress")
const circleMain = progress.querySelector(".circle-main")
const progressValue = document.getElementById("progress-value")
const progressAnimate = document.getElementById("progress-animate")
const progressHide = document.getElementById("progress-hide")

//передается объект ссылок на dom-елементы, которые участвуют в отображении прогресса, чтобы класс Progress не был прибит к верстке
const circle = new Progress({
    element: progress,
    circleMain: circleMain,
})
circle.setValue(progressValue.value)

progressValue.addEventListener("input", (event) => {
    let value = Number(event.target.value)
    if (value > 100) {
        value = 100
    } else if (value < 0) {
        value = 0
    }
    event.target.value = value
    circle.setValue(value)
})

progressAnimate.addEventListener("change", (event) => {
    circle.setAnimate(event.target.checked)
})

progressHide.addEventListener("change", (event) => {
    circle.setHide(event.target.checked)
})
