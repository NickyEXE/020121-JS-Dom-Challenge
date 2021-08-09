const dom = {
  counter: document.getElementById("counter"),
  plus: document.getElementById("plus"),
  minus: document.getElementById("minus"),
  pause: document.getElementById("pause"),

}

const state = {
  paused: false
}

function count(num){
  if (!state.paused){
    dom.counter.innerText = parseInt(dom.counter.innerText) + num
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

setInterval(() => count(1), 1000)
dom.plus.addEventListener("click", () => count(1))
dom.minus.addEventListener("click", () => count(-1))
dom.pause.addEventListener("click", togglePause)
