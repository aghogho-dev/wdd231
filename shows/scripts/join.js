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


function displayTopSearches() {
    let searches = JSON.parse(localStorage.getItem("searches")) || [];

    searches.sort((a, b) => b.count - a.count);

    const topSearches = searches.slice(0, 10);

    const resultsContainer = document.getElementById("top-searches");
    resultsContainer.innerHTML = "";

    topSearches.forEach(item => {
        const searchItem = document.createElement("p");
        searchItem.textContent = `Title: ${item.query}: type: ${item.type}, searches: ${item.count}`;
        resultsContainer.appendChild(searchItem);
    });
}


window.onload = displayTopSearches;



// const currentUrl = window.location.href;

// const formData = currentUrl.split("?")[1].split("&");

// function show(field) {
//     let result = "";

//     formData.forEach((e) => {
//         if (e.startsWith(field)) {

//             result = e.split("=")[1];
//             result = result.replace("%40", "@");

//             let count = result.split("+").length - 1;

//             for (let i = 0; i < count; i++) result = result.replace("+", " ");

//             count = result.split("%2B").length - 1;

//             for (let i = 0; i < count; i++) result = result.replace("%2B", "+");

//         }
//     })

//     return result;
// }


document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("subscribe-form");
    const showInfo = document.getElementById("form-results");

    const show = (name) => form.elements[name].value;

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        showInfo.innerHTML = `
            <h2>Thank you for subscribing</h2>
            <h3>Your details</h3>
            <p>First Name: ${show("first")}</p>
            <p>Last Name: ${show("last")}</p>
            <p>Email: <a href="mailto:${show("email")}">${show("email")}</a></p>
            <p>Mobile Phone Number: ${show("mobile-phone")}</p>
            `;

        showInfo.showModal();

        setTimeout(() => {
            window.location.href = "index.html";
        }, 2000);

    });
});






