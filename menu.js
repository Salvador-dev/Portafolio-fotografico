const boton = document.querySelector("#menu");
const menu = document.querySelector(".menu")

boton.addEventListener("click", function(){
    menu.classList.toggle("mostrar");
})

