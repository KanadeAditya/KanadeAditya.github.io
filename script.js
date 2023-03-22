const head = document.querySelector("header");

function fixednav(){
    head.classList.toggle("scrolled",window.pageYOffset>0)
}

const linsk = document.querySelectorAll(".nav-link")


fixednav()
window.addEventListener("load",()=>{
   
    
})



window.addEventListener("scroll",()=>{
    fixednav();
    activeLink();
})

// animations -----
let scroll = ScrollReveal({
    duration:2500,
    distance :"60px"

})

scroll.reveal(".hero-info", {delay : 600})
scroll.reveal(".hero-image", { origin:"top" ,delay : 600})


// Active link on scroll ------------------------/

function activeLink(){
    // console.log("heeh")
    let sections = document.querySelectorAll("section[id]");
    let passedsections = Array.from(sections).map((sct,int)=>{
        return {
            y:sct.getBoundingClientRect().top - head.offsetHeight,
            id:int
        };
    }).filter(sct => sct.y<=0 )
    let currSectionID = passedsections.at(-1).id;
    // console.log(currSectionID)
    linsk.forEach(l => l.classList.remove("active"));
    linsk[currSectionID].classList.add("active");

}
// linsk.forEach(l => l.classList.remove("active"));
activeLink()