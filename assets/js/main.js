const hamburger = document.querySelector(".hamburger")
const closeBtn = document.querySelector(".close")
const navMenu = document.querySelector(".nav-menu")

const showNav = () => {
    console.log("Show Mav");
    navMenu.classList.remove("up")
    navMenu.classList.add('show')
    closeBtn.classList.toggle("hidden")
    hamburger.classList.toggle("hidden")
}

const closeNav = () => {
    navMenu.classList.add("up")
    navMenu.classList.remove('show')
    hamburger.classList.toggle("hidden")
    closeBtn.classList.toggle("hidden")
}

hamburger.addEventListener('click', showNav)
closeBtn.addEventListener('click', closeNav)

