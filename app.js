const menuBtn=document.getElementById("menu-btn");
const navLinks=document.getElementById("nav-links");
const menuBtnIcon=menuBtn.querySelector("div");
menuBtn.addEventListener("click", (e)=>{
    navLinks.classList.toggle("open");
    const isOpen= navLinks.classList.contains("open");
    menuBtnIcon.setAttribute("class", isOpen ?'icons8-close':'icons8-menu')
});
