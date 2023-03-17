const head = document.querySelector("header");

function fixednav(){
    head.classList.toggle("scrolled",window.pageYOffset>0)
}
fixednav()
window.addEventListener("load",()=>{
   
    
})



window.addEventListener("scroll",fixednav)

// animations -----
let scroll = ScrollReveal({
    duration:2500,
    distance :"60px"

})

scroll.reveal(".hero-info", {delay : 600})
scroll.reveal(".hero-image", { origin:"top" ,delay : 600})