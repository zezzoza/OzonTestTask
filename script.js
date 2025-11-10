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
        let valueProgress = Number(value)
        if (valueProgress < 0) {
            valueProgress = 0
        } else if (valueProgress > 100) {
            valueProgress = 100
        }

        const offset = this.length * (1 - valueProgress / 100)
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
    circle.setValue(event.target.value)
})

progressAnimate.addEventListener("change", (event) => {
    circle.setAnimate(event.target.checked)
})

progressHide.addEventListener("change", (event) => {
    circle.setHide(event.target.checked)
})
