class Like {

  static all = []

  constructor(second){
    this.second = second
    this.likes = 1
    this.constructor.all.push(this)
    this.element = document.createElement("li")
    this.updateElement()
    app.dom.likes.appendChild(this.element)
  }

  increaseLikes = () => {
    this.likes ++
    this.updateElement()
  }

  updateElement = () => this.element.innerText = `${this.second} has been liked ${this.likes} time${this.likes > 1 ? "s" : ""}.`

  static findBySecond = (second) => this.all.find(like => like.second == second)

  static updateOrCreateBySecond(second){
    const like = this.findBySecond(second)
    if (like) {
      like.increaseLikes()
      return like
    } else {
      return new Like(second)
    }
  }


}
