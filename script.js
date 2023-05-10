

let burgerbtn = document.querySelector(".burger-logo");
let burgerMenu = document.querySelector(".nav-wraper");
let icon1 = document.querySelector(".burger-logo .bar:nth-child(1)");
let icon2 = document.querySelector(".burger-logo .bar:nth-child(2)");
let icon3 = document.querySelector(".burger-logo .bar:nth-child(3)");


function toggleMenu() {
    burgerMenu.classList.toggle("li-active");
    icon1.classList.toggle("close-icon1");
    icon2.classList.toggle("close-icon2");
    icon3.classList.toggle("close-icon3");
    burgerbtn.classList.toggle("logo-active");
    
}

burgerbtn.addEventListener("click", toggleMenu);


