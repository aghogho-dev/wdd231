const courseList = [
    "CSE 110",
    "WDD 130",
    "CSE 111",
    "CSE 210",
    "WDD 131",
    "WDD 231",
]


documents.addEventListener("DOMContentLoaded", () => {
    const getYear = document.querySelector("#currentyear");
    const lastModified = document.querySelector("#lastModified");

    const today = new Date();

    getYear.innerHTML = `${today.getFullYear()}`;
    lastModified.innerHTML = `Last Update: ${today.getDate()}/${today.getMonth()}/${today.getFullYear()} ${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`
})