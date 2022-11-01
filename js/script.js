
// MENU TOGGLE

const btnToggle = document.querySelector(".menu__toggle")
const navigationMobile = document.querySelector(".navigation__mobile")

btnToggle.addEventListener("click", function() {
    if (navigationMobile.classList.contains("invisible")) {
        navigationMobile.classList.remove("invisible")
    }
    else {
        navigationMobile.classList.add("invisible")
    }
})