const dom = {
  counter: document.getElementById("counter"),
  plus: document.getElementById("plus"),
  minus: document.getElementById("minus"),
  pause: document.getElementById("pause"),
  heart: document.getElementById("heart"),
  likes: document.querySelector(".likes"),
  comments: document.getElementById("list"),
  commentForm: document.getElementById("comment-form"),
  getCount: () => parseInt(dom.counter.innerText),
}

// basic selectors
// .class
// #id
// tags you just call directly: "h1"

const state = {
  paused: false,
  likes: {}
}

function count(num){
  if (!state.paused){
    dom.counter.innerText = dom.getCount() + num
  }
}

function togglePause(){
  state.paused = !state.paused
  document.querySelectorAll("button").forEach(button => {
    if (button.id !== "pause"){
      button.disabled = !button.disabled
    }
  })
  if (pause.innerText == "pause") {
    pause.innerText = "resume"
  } else {
    pause.innerText = "pause"
  }
}

// using state to handle likes as a hash
function like(){
  const second = dom.getCount()
  if (state.likes[second]){
    state.likes[second] ++
  } else {
     state.likes[second] = 1
  }
  renderLikes()
}

function renderLikes(){
  dom.likes.innerHTML = ""
  Object.entries(state.likes).forEach(arr => {
    const second = arr[0]
    const likes = arr[1]
    dom.likes.innerHTML += `<li>${second} has been liked ${likes} time${likes > 1 ? "s" : ""}.</li>`
  })
}

function handleComment(e){
  e.preventDefault()
  dom.comments.innerHTML += `<p>${e.target.comment.value}</p>`
  e.target.reset()
}

setInterval(() => count(1), 1000)
dom.plus.addEventListener("click", () => count(1))
dom.minus.addEventListener("click", () => count(-1))
dom.pause.addEventListener("click", togglePause)
dom.heart.addEventListener("click", like)
dom.commentForm.addEventListener("submit", handleComment)
