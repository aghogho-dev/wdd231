import { displayFavoriteMovie, displayFavoriteTVShow, fetchData, fetchTVData } from "../data/getdata.js";


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



const visitorMessageEl = document.getElementById('visitor-message');


function checkLastVisit() {
    const lastVisit = localStorage.getItem('lastVisit');
    const now = new Date();
    const message = getVisitMessage(lastVisit, now);

    localStorage.setItem('lastVisit', now.toISOString());


    if (message) {
        visitorMessageEl.innerHTML = message;
    }
}


function getVisitMessage(lastVisit, now) {
    if (!lastVisit) {
        return "Welcome! Let us know if you have any questions.";
    }

    const lastVisitDate = new Date(lastVisit);
    const timeDiff = Math.abs(now - lastVisitDate);
    const daysDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24));


    if (daysDiff < 1) {
        return "Back so soon! Awesome!";
    } else {
        return `You last visited ${daysDiff} ${daysDiff === 1 ? 'day' : 'days'} ago.`;
    }
}



window.onload = checkLastVisit;

displayFavoriteMovie(true);
displayFavoriteMovie(false);
displayFavoriteTVShow();


// document.addEventListener("DOMContentLoaded", () => {

//     const idx = 0;

//     const dialogBoxes = document.querySelectorAll("dialog");
//     const modalCloseBtns = document.querySelectorAll(".close-modal");
//     const modalOpenBtns = document.querySelectorAll(".open-modal");


//     modalOpenBtns.forEach((btn, index) => {
//         btn.addEventListener("click", () => {
//             console.log(index);
//             const targetDialog = dialogBoxes[index];
//             if (targetDialog) targetDialog.showModal();
//         });
//     });


//     modalCloseBtns.forEach((btn, index) => {
//         btn.addEventListener("click", () => {
//             const targetDialog = dialogBoxes[index];
//             if (targetDialog) targetDialog.close();
//         });
//     });
// });



// console.log(fetchTVData(2734));
// console.log(fetchData(519182));





