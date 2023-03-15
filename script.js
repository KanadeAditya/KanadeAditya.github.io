const head = document.querySelector("header");

function fixednav(){
    head.classList.toggle("scrolled",window.pageYOffset>0)
}
fixednav()
window.addEventListener("load",()=>{
   
    
})



window.addEventListener("scroll",fixednav)