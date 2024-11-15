const btnMode = document.querySelector("#btnMode")
const body = document.body

btnMode.addEventListener("click", function(){
  body.classList.toggle("dark")
  body.classList.contains("dark") ? btnMode.classList.add("fa-moon") : btnMode.classList.remove("fa-moon")
})