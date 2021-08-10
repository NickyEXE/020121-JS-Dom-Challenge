// This is called a singleton class: It's a class meant to be invoked once and used for it's instance.
// It's predominantly a way of organizing and structuring code that is meant to both keep track of data and have regular behaviors (functions)

class App {
  constructor(){
    this.dom = new Dom()
    this.toggleInterval()
    this.setEventListeners()
  }

  // using && in the below way is called "short-circuiting".
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_AND#short-circuit_evaluation
  // It can be a short way to write "if this, then do this" and is often used by React developers.
  // JavaScript's && will handle (Thing A) && (Thing B) by first checking if Thing A is truthy.
    // If Thing A is truthy, it'll go on and execute and return Thing B
    // If Thing A is falsy, it'll just return Thing A.
    // So (conditional) && thingToDoIfItsTrue() is a very common pattern.
  count = (num) => this.dom.counter.innerText = this.dom.currentSecond() + num

  togglePause = () => {
    this.dom.togglePauseText()
    this.dom.toggleButtons()
    this.toggleInterval()
  }

  toggleInterval = () => {
    if (this.interval) {
      // clearInterval returns undefined, so the below will both clear the interval and make the above conditional return false
      this.interval = clearInterval(this.interval)
    } else {
      this.interval = setInterval(() => this.count(1), 1000)
    }
  }

  like = () => Like.updateOrCreateBySecond(this.dom.currentSecond())

  handleComment = (e) => {
    e.preventDefault()
    const { comments, commentForm } = this.dom
    comments.innerHTML += `<p>${commentForm.comment.value}</p>`
    commentForm.reset()
  }

  setEventListeners = () => {
    // this is advanced destructuring
    // See "Nested Object and Array Destructuring" here: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#examples
    // what I'm saying is:
      // from the keys "count", "togglePause", "like", and "handleComment" on the App instance (this), create variables count, togglePause, like, and handleComment
      // also, go into this.dom (the nested object) and create variables out of the keys "plus", "minus", "pause", "heart", and "commentForm"
    const { count, togglePause, like, handleComment, dom: { plus, minus, pause, heart, commentForm } } = this
    plus.addEventListener("click", () => count(1))
    minus.addEventListener("click", () => count(-1))
    pause.addEventListener("click", togglePause)
    heart.addEventListener("click", like)
    commentForm.addEventListener("submit", handleComment)
  }

}
