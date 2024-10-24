const apiKey = "dce09b81ce070af51980ecb8304f70a6";

const hero = document.getElementById("hero");
const movieShow = document.getElementById("movie-show");
const tvShow = document.getElementById("tv-show");

const favoriteMovieIds = [889737, 106646, 1186947, 1248753, 872585, 475557];
const favoriteTVIds = [2734, 37680, 1668];
const heroMovieIds = [519182, 1184918, 1022789, 1159311, 1354627];

function fetchData(id) {
    const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&append_to_response=images`;

    return fetch(url)
        .then(response => {
            if (!response.ok) throw new Error(`HTTP Error! status: ${response.status}`);
            return response.json();
        })
        .catch(error => {
            console.error(`Failed to fetch movie with ID ${id}: ${error.message}`);
            return null;
        });
}

function fetchTVData(id) {
    const url = `https://api.themoviedb.org/3/tv/${id}?api_key=${apiKey}&append_to_response=images`;

    return fetch(url)
        .then(response => {
            if (!response.ok) throw new Error(`HTTP Error! status: ${respons.status}`);
            return response.json();
        })
        .catch(error => {
            console.error(`Failed to fetch TV show with ID ${id}: ${error.message}`);
        });
}

function displayTV(data) {

    if (!data) {
        const errorEle = document.createElement("div");
        errorEle.classList.add("error");
        errorEle.textContent = "Failed to load TV show details";
        return;
    }

    const tvEle = document.createElement("div");
    tvEle.classList.add("tv");

    const imgEle = document.createElement("img");
    imgEle.setAttribute("src", `https://image.tmdb.org/t/p/w500/${data.poster_path}`);
    imgEle.setAttribute("alt", `${data.name}`);

    const describeDiv = document.createElement("div");
    describeDiv.classList.add("describe-tv");
    const describeHeader = document.createElement("h3");
    describeHeader.textContent = "Description";
    const releaseDate = document.createElement("p");
    releaseDate.innerHTML = `<strong>First Air Date:</strong> ${data.first_air_date}<br><strong>Last Air Date:</strong> ${data.last_air_date}`;
    const overview = document.createElement("p");
    overview.textContent = data.overview;

    describeDiv.appendChild(describeHeader);
    describeDiv.appendChild(releaseDate);
    describeDiv.appendChild(overview);


    tvEle.appendChild(imgEle);
    tvEle.appendChild(describeDiv);

    tvShow.appendChild(tvEle);
}

function displayMovie(data, isHero) {
    if (!data) {
        const errorEle = document.createElement("div");
        errorEle.classList.add("error");
        errorEle.textContent = "Failed to load movie details";

        if (!isHero) {
            movieShow.appendChild(error);
        } else {
            hero.appendChild(errorEle);
        }

        return;
    }

    if (!isHero) {
        const movieEle = document.createElement("div");
        movieEle.classList.add("movie");

        const imgEle = document.createElement("img");
        imgEle.setAttribute("src", `https://image.tmdb.org/t/p/w500/${data.poster_path}`);
        imgEle.setAttribute("alt", `${data.title}`);

        const describeDiv = document.createElement("div");
        describeDiv.classList.add("describe-movie");
        const describeHeader = document.createElement("h3");
        describeHeader.textContent = "Description";
        const releaseDate = document.createElement("p");
        releaseDate.innerHTML = `<strong>Release Date:</strong> ${data.release_date}`;
        const overview = document.createElement("p");
        overview.textContent = data.overview;

        describeDiv.appendChild(describeHeader);
        describeDiv.appendChild(releaseDate);
        describeDiv.appendChild(overview);


        movieEle.appendChild(imgEle);
        movieEle.appendChild(describeDiv);

        movieShow.appendChild(movieEle);
    } else {
        hero.innerHTML = `<img src="https://image.tmdb.org/t/p/w500/${data.poster_path}" alt="${data.title}">`;
    }
}

function displayFavoriteMovie(isHero) {

    if (!isHero) {
        favoriteMovieIds.forEach((movieId) => {
            fetchData(movieId)
                .then(movieData => {
                    displayMovie(movieData, false);
                });
        });
    } else {
        const randomIndex = Math.floor(Math.random() * heroMovieIds.length);
        const randomHeroId = heroMovieIds[randomIndex];
        fetchData(randomHeroId)
            .then(movieData => {
                displayMovie(movieData, true);
            });
    }

}

function displayFavoriteTVShow() {
    favoriteTVIds.forEach(tvId => {
        fetchTVData(tvId)
            .then(tvData => {
                displayTV(tvData);
            });
    });
}

export { displayFavoriteMovie, fetchData, fetchTVData, displayFavoriteTVShow };


