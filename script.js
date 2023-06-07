const head = document.querySelector("header");

function fixednav(){
    head.classList.toggle("scrolled",window.pageYOffset>0)
}

const linsk = document.querySelectorAll(".nav-link")

const toogle = document.querySelector(".toogle-btn");

const hamburger = document.querySelector('.hamburger');

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
    // console.log(sections)
    let passedsections = Array.from(sections).map((sct,int)=>{
        return {
            y:sct.getBoundingClientRect().top - head.offsetHeight,
            id:int
        };
    }).filter(sct => sct.y<=0 )
    let currSectionID = passedsections.at(-1).id;
    // console.log(currSectionID)
    if(currSectionID === 5){
        currSectionID = 4
    }
    linsk.forEach(l => l.classList.remove("active"));
    linsk[currSectionID].classList.add("active");

}
// linsk.forEach(l => l.classList.remove("active"));
activeLink()


// toggle dark mode ---------------------------/


let currenttheme = +localStorage.getItem("darkportfolio") ;

changeTheme(+currenttheme)


toogle.addEventListener("click",()=>{
    changeTheme(!document.body.classList.contains("dark"));
})





function changeTheme(isdark){
    // <i class="uil uil-sun"></i>
    
    if(!isdark){
        document.body.classList.remove("dark");
        toogle.classList.replace("uil-sun","uil-moon");
        localStorage.setItem("darkportfolio",0);
    }else{
        document.body.classList.add("dark");
        toogle.classList.replace("uil-moon","uil-sun");
        localStorage.setItem("darkportfolio",1);
    }
}

// open close navbar

hamburger.addEventListener('click',()=>{
    document.body.classList.toggle("open")
    document.body.classList.toggle("stopScrolling")

})

linsk.forEach(link => link.addEventListener('click',()=>{
    document.body.classList.remove("open")
    document.body.classList.remove("stopScrolling")
}))