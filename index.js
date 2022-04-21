function boom(){
  document.querySelector("#message").textContent = "BOOM"
}

const boomButton = document.querySelector('button')
boomButton.addEventListener("click", event => {
  return boom()
})

