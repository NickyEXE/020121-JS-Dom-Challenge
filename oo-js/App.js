// This is called a singleton class: It's a class meant to be invoked once and used for it's instance.
// It's predominantly a way of organizing and structuring code that is meant to both keep track of data and have regular behaviors (functions)

class App {
  constructor(){
    this.dom = new Dom()
    this.paused = false
    this.interval = setInterval(() => this.count(1), 1000)
    this.setEventListeners()
  }

  // using && in this way is called "short-circuiting".
  // It can be a short way to write "if this, then do this" and is often used by React developers.
  // JavaScript's && will handle (Thing A) && (Thing B) by first checking if Thing A is truthy.
    // If Thing A is truthy, it'll go on and execute and return Thing B
    // If Thing A is falsy, it'll just return Thing A.
    // So (conditional) && thingToDoIfItsTrue() is a very common pattern.
  count = (num) => !this.paused && (this.dom.counter.innerText = this.dom.currentSecond() + num)

  togglePause = () => {
    this.dom.togglePauseText()
    this.dom.toggleButtons()
    this.paused = !this.paused
  }

  like = () => Like.updateOrCreateBySecond(this.dom.currentSecond())

  setEventListeners = () => {
    const {dom, count, togglePause, like, handleComment } = this
    dom.plus.addEventListener("click", () => count(1))
    dom.minus.addEventListener("click", () => count(-1))
    dom.pause.addEventListener("click", togglePause)
    dom.heart.addEventListener("click", like)
    // dom.commentForm.addEventListener("submit", handleComment)
  }

}
