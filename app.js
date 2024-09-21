const menuBtn=document.getElementById("menu-btn");
const navLinks=document.getElementById("nav-links");
const menuBtnIcon=menuBtn.querySelector("div");
menuBtn.addEventListener("click", (e)=>{
    navLinks.classList.toggle("open");
    const isOpen= navLinks.classList.contains("open");
    menuBtnIcon.setAttribute("class", isOpen ?'icons8-close':'icons8-menu')
});
navLinks.addEventListener("click" ,(e)=>{
    navLinks.classList.remove("open");
    menuBtnIcon.setAttribute("class","icons8-close")
});
// const scrollRevealOption ={
//     origin:"bottom",
//     distance:"50px",
//     duration:1000,

// }
// scrollReveal().reveal(".header__image img" ,{
//     ...scrollRevealOption,
//     origin:"right",
// });
