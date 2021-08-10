class Dom {
  constructor(){
    this.counter = document.getElementById("counter")
    this.plus = document.getElementById("plus")
    this.minus = document.getElementById("minus")
    this.pause = document.getElementById("pause")
    this.heart = document.getElementById("heart")
    this.likes = document.querySelector(".likes")
    this.comments = document.getElementById("list")
    this.commentForm = document.getElementById("comment-form")
  }

  currentSecond = () => parseInt(this.counter.innerText)

  togglePauseText = () => this.pause.innerText == "pause" ? (this.pause.innerText = "resume") : (this.pause.innerText = "pause")

  toggleButtons = () => document.querySelectorAll("button").forEach(button => {
    // see explanation of Short Circuiting in App.js comments
    button.id !== "pause" && (button.disabled = !button.disabled)
  })
}
