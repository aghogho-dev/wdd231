const menuBtn = document.querySelector("#menu-btn");
const navEle = document.querySelector("#menu-links");

menuBtn.addEventListener("click", () => {
    navEle.classList.toggle("open");
    menuBtn.classList.toggle("open");
})