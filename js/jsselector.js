
const main = document.querySelector(".main");
const imgs = document.querySelectorAll(".imgs");

imgs.forEach(thumb =>{
  thumb.addEventListener("click", function(){
    const activo = document.querySelector("#active")
    activo.classList.remove('active')
    this.classList.add('active')
    main.src = this.src
  })
})

