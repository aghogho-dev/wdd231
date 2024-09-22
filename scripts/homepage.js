const courseList = [
    "CSE 110",
    "WDD 130",
    "CSE 111",
    "CSE 210",
    "WDD 131",
    "WDD 231",
]


document.addEventListener("DOMContentLoaded", () => {
    const getYear = document.querySelector("#currentyear");
    const lastModified = document.querySelector("#lastModified");

    const today = new Date();

    getYear.innerHTML = `${today.getFullYear()}`;
    lastModified.innerHTML = `Last Update: ${today.getDate()}/${today.getMonth()}/${today.getFullYear()} ${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`

    const nav = document.querySelector("nav");
    const menu = document.querySelector("#menu");

    menu.addEventListener("click", () => {
        nav.classList.toggle("open");
        menu.classList.toggle("open");

        nav.querySelectorAll('a').forEach(link => {
            if (nav.classList.contains('open')) {
                link.style.display = 'block';
            } else {
                link.style.display = 'none';
            }
        });
    });
});