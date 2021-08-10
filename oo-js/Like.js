class Like {

  static all = []

  constructor(second){
    this.second = second
    this.likes = 1
    this.element = document.createElement("li")
    this.updateElement()
    app.dom.likes.appendChild(this.element)
    this.constructor.all.push(this)
  }

  increaseCount = () => {
    this.likes ++
    this.updateElement()
  }

  updateElement = () => this.element.innerText = `${this.second} has been liked ${this.likes} time${this.likes > 1 ? "s" : ""}.`

  static findBySecond = (second) => this.all.find(like => like.second == second)

  static updateOrCreateBySecond(second){
    const like = this.findBySecond(second)
    // the below is a "ternary" operator: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator
    like ? like.increaseCount() : new Like(second)
  }


}
