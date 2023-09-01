//dark mode and light mode 
const dayNight = document.querySelector(".day-night");
dayNight.addEventListener("click", () => {
    dayNight.querySelector("i").classList.toggle("fa-sun");
    dayNight.querySelector("i").classList.toggle("fa-moon");
    document.body.classList.toggle("dark");
})
window.addEventListener("load", () => {
    if (document.body.classList.contains("dark")) {
        dayNight.querySelector("i").classList.add("fa-sun");
    } else {
        dayNight.querySelector("i").classList.add("fa-moon");
    }


})


// role  animation
var Typed = new Typed(".role", {
    strings: ["", "Frontend Developer ", "Web Developer"],
    typeSpeed: 100,
    BackSpeed: 60,
    loop: true
})