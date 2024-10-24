const menuBtn = document.querySelector("#menu-btn");
const navEle = document.querySelector("#menu-links");

menuBtn.addEventListener("click", () => {
    navEle.classList.toggle("open");
    menuBtn.classList.toggle("open");
});


const getYear = document.querySelector("#current-year");
const lastModified = document.querySelector("#last-modified");

const today = new Date();

getYear.innerHTML = `${today.getFullYear()}`;
lastModified.innerHTML = `Last Modification: ${today.getDate()}/${today.getMonth()}/${today.getFullYear()} ${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`

