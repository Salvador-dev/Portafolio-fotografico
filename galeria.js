const lightbox = document.createElement('div')
const x = document.querySelector(".x")
lightbox.id = 'lightbox'
document.body.appendChild(lightbox)

const images = document.querySelectorAll('img')
images.forEach(image => {
    image.addEventListener('click', e => {
      lightbox.classList.add('active') 
      x.classList.add('active')
      const img = document.createElement('img')
      img.src = image.src
      while (lightbox.firstChild){
          lightbox.removeChild(lightbox.firstChild)
      }
      lightbox.appendChild(img)
    })
})

x.addEventListener("click", ()=>{
    lightbox.classList.remove('active')
    x.classList.remove('active')
})

lightbox.addEventListener('click', e =>{
    if (e.target !== e.currentTarget) return
    lightbox.classList.remove('active')
    x.classList.remove('active')
})



