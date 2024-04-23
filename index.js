const inc= document.getElementById("inc");
const dec= document.getElementById("dec");
const counter =document.getElementById("counter");

inc.addEventListener("click", (e) => {
  counter.innerHTML++
})
dec.addEventListener("click", (e) => {
  counter.innerHTML--
})
