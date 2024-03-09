/* ============================= toggle style switcher ============================= */
const styleSwitcherToggle = document.querySelector(".style-switcher-toggler");
styleSwitcherToggle.addEventListener("click", () => {
    document.querySelector(".style-switcher").classList.toggle("open");
})
// hide style - switcher on scroll
window.addEventListener("scroll", () => {
    if(document.querySelector(".style-switcher").classList.contains("open"))
    {
        document.querySelector(".style-switcher").classList.remove("open");
    }
})
/* ============================= theme light and dark mode ============================= */
const daylight = document.querySelector(".day-light");
daylight.addEventListener("click", () => {
    daylight.querySelector("i").classList.toggle("fa-sun");
    daylight.querySelector("i").classList.toggle("fa-moon");
    document.body.classList.toggle("dark");
})
window.addEventListener("load", () => {
    if(document.body.classList.contains("dark"))
    {
        daylight.querySelector("i").classList.add("fa-sun");
    }
    else
    {
        daylight.querySelector("i").classList.add("fa-moon");
    }
})