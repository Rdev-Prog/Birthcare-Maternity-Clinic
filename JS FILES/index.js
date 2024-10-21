// SCRIPT FOR CHANGING HEADER BACKGROUND COLOR
const header = document.getElementById("mainHeader")

window.addEventListener("scroll", () => {
    if (pageYOffset === 0) {
        header.classList.remove("headerNewStyle")
    } else {
        header.classList.add("headerNewStyle")
    }
})

// SCRIPT FOR ANIMATING CALL ICON
const callBtn = document.getElementById("callBtn")
const callIcon = document.getElementById("callIcon")

callBtn.addEventListener("mouseover", () => {
    callIcon.classList.add("callIconAnimation")
})

callBtn.addEventListener("mouseout", () => {
    callIcon.classList.remove("callIconAnimation")
})

// SCRIPT FOR CALLING THE NUMBER
function callNum() {
    window.location.href = "tel:0968 883 7878"
}

// SCRIPT FOR EMAIL BUTTON
const emailBtn = document.getElementById("emailBtn")

emailBtn.addEventListener("click", () => {
    window.location.href = "mailto:birthcarematernityclinic@gmail.com"
})

// SCRIPT FOR FACEBOOK BUTTON
const fbBtn = document.getElementById("fbBtn")

fbBtn.addEventListener("click", () => {
    window.location.href = "https://www.facebook.com/profile.php?id=100086801010813"
})

// SCRIPT FOR CLICKING THE LOGO
const logo = document.getElementById("logo")

logo.addEventListener("click", () => {
    window.location.href = "index.html#home"
})

// SCRIPT FOR CLICKING "OUR SERVICES" BUTTON
const serviceBtn = document.getElementById("serviceBtn")

serviceBtn.addEventListener("click", () => {
    window.location.href = "index.html#service"
})

// FUNCTION FOR LOADING SCREEN
const loadingScreen = document.getElementById("loadingScreen");
const content = document.getElementById("home");

window.addEventListener("load", () => {
    loadingScreen.style.display = "none";
    content.style.display = "grid";
});

// SCRIPT FOR GOING TO CONTACT PAGE
const connectBtn = document.getElementById("connectBtn")

connectBtn.addEventListener("click", () => {
    window.location.href = "index.html#contact"
})


// SCRIPT FOR SHOWING MENU LINK
const hamburgerIcon = document.getElementById("hamburgerIcon")
const navLinkCon = document.getElementById("navLinkCon")
const links = document.querySelectorAll(".link")

let clickCount = 0

hamburgerIcon.addEventListener("click", () => {
    clickCount++

    checkState()
})

links.forEach((link) => {
    link.addEventListener("click", () => {
        clickCount++

        checkState()
    })
})

function checkState() {
    if (clickCount === 1) {
        hamburgerIcon.classList.remove("fa-bars")
        hamburgerIcon.classList.add("fa-x")

        navLinkCon.style.display = "flex"
    } else if (clickCount === 2) {
        clickCount = 0
        hamburgerIcon.classList.add("fa-bars")
        hamburgerIcon.classList.remove("fa-x")

        navLinkCon.style.display = "none"
    }
}