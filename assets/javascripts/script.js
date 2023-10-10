//Toggle Navbar Icon
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
    menuIcon.classList.toggle("bx-x");
    navbar.classList.toggle("active");
};
const loginForm = document.querySelector("#loginForm");
const login = document.querySelector("#login");


login.onclick = () => {
    loginForm.classList.add("active");
};

const submitButton = document.querySelector("#submit");
submitButton.addEventListener("click", (e) => {
    e.preventDefault();
    submitButton.onclick = () => {
        loginForm.classList.remove("active");
    };
});