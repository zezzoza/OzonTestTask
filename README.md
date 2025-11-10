Здравствуйте, я немного не понял что именно мне нужно скрывать и вращать при клике на кнопки "Animate" и "Hide", поэтому сделал вращение и скрытие самого круга прогресса.

Класс Progress не прибит к верстке, только метод setState использует значения "normal", "hide", "animate" для взаимодействия с css. Эти значения используются в собственном атрибуте "data-state" (data-state="normal").

setState() {
let state = "normal"
if (this.isHide) {
state = "hide"
} else if (this.isAnimate) {
state = "animate"
}
this.element.dataset.state = state
}

При создании экземпляра класса Progress, принимается объект ссылок на dom-елементы

const circle = new Progress({
element: progress,
circleMain: circleMain,
})

element - ссылка на элемент, который будет анимироваться или скрываться
circleMain - это сам круг прогресса
