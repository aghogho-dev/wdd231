import { getSearchResults, displayTV, displayMovie } from "../data/getdata.js";

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


const searchForm = document.getElementById("search-form");
const movieShow = document.getElementById("movie-show");
const tvShow = document.getElementById("tv-show");

searchForm.addEventListener("submit", event => {
    event.preventDefault();

    const query = document.getElementById("search-query").value;
    const searchType = document.querySelector('input[name="search-type"]:checked').value;

    console.log(`Searching for ${searchType}: ${query}`);

    const searchData = getSearchResults(searchType, query);

    console.log(typeof searchData);
    console.log(searchData);

    movieShow.innerHTML = "";
    tvShow.innerText = "";

    searchData
        .then(results => {
            results.forEach((result) => {
                if (searchType === "movie") displayMovie(result, false);
                else displayTV(result);
            });
        })


});
