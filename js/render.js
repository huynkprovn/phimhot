fetch("./js/LASTEST.json")
    .then(function (resp) {
        return resp.json();
    })
    .then(function (data) {
        let seriesMovie = $('#series-movie');
        let featureFilms = $('#feature-films');
        let movieTheaters = $('#movie-theaters');
        let animeMovies = $('#anime-movies');

        for (let i = 0; i < 15; i++) {
            //Render series movie
            seriesMovie.append(
                `<div class="films">
                    <a class="film-link" href="${data.phim.phimbo[i].url}">
                        <div class="film-image" style="background-image: url(${data.phim.phimbo[i].imageUrl})"></div>
                        <h3 class="film-title">${data.phim.phimbo[i].title}</h3>
                    </a>
                </div>`
            )

            //Render feature films
            featureFilms.append(
                `<div class="films">
                    <a class="film-link" href="${data.phim.phimle[i].url}">
                        <div class="film-image" style="background-image: url(${data.phim.phimle[i].imageUrl})"></div>
                        <h3 class="film-title">${data.phim.phimle[i].title}</h3>
                    </a>
                </div>`
            )

            //Render movie theaters
            movieTheaters.append(
                `<div class="films">
                    <a class="film-link" href="${data.phim.phimchieurap[i].url}">
                        <div class="film-image" style="background-image: url(${data.phim.phimchieurap[i].imageUrl})"></div>
                        <h3 class="film-title">${data.phim.phimchieurap[i].title}</h3>
                    </a>
                </div>`
            )

            //Render anime movies
            animeMovies.append(
                `<div class="films">
                    <a class="film-link" href="${data.phim.phimhoathinh[i].url}">
                        <div class="film-image" style="background-image: url(${data.phim.phimhoathinh[i].imageUrl})"></div>
                        <h3 class="film-title">${data.phim.phimhoathinh[i].title}</h3>
                    </a>
                </div>`
            )
        }
    })