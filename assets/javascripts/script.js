//Toggle Navbar Icon
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
    menuIcon.classList.toggle("bx-x");
    navbar.classList.toggle("active");
};
const loginForm = document.querySelector("#loginForm");
const registerForm = document.querySelector("#registerForm");
const login = document.querySelector("#login");
const register = document.querySelector("#register");

const heroSection = document.querySelector(".hero");
const startBtn = document.querySelector("#getStart");

const registerIn = document.querySelector("#register-in");
const loginIn = document.querySelector("#log-in");

registerIn.onclick = () => {
    registerForm.classList.add("active");
    heroSection.classList.add("active");
    loginForm.classList.remove("active");
};

loginIn.onclick = () => {
    loginForm.classList.add("active");
    heroSection.classList.add("active");
    registerForm.classList.remove("active");
};

login.onclick = () => {
    loginForm.classList.add("active");
    heroSection.classList.add("active");
};

register.onclick = () => {
    registerForm.classList.add("active");
    heroSection.classList.add("active");
};

startBtn.onclick = () => {
    loginForm.classList.add("active");
    startBtn.classList.add("active");
    heroSection.classList.add("active");
}

const submitButton = document.querySelector(".submit");
submitButton.addEventListener("click", (e) => {
    e.preventDefault();
    submitButton.onclick = () => {
        loginForm.classList.remove("active");
        heroSection.classList.remove("active");
    };
});