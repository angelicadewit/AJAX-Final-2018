"use strict";

var movieModule = function () {

    var API_KEY = "9bccd1a3d349ce45f26368e58cd92682";
    var apikey = "fa54120f63963b0660df915a9c213691";

    var termEl = document.querySelector('.searchInput');
    var searchBtn = document.querySelector('.searchBtn');
    var resultsEl = document.getElementById('results');

    searchBtn.addEventListener('click', function (e) {
        e.preventDefault();
        var queryTerm = termEl.value;
        searchMovie(queryTerm);
    });

    function searchMovie(queryTerm) {
        axios.get('https://api.themoviedb.org/3/discover/movie', {
            params: {
                'api_key': apikey,
                'primary_release_year': queryTerm,
                'with_keywords': '180547'
            },
            headers: {}
        }).then(function (response) {
            console.log('response:', response.data, response);
            resultsEl.innerHTML = " ";
            if (response.data.results == 0) {
                resultsEl.innerHTML = "<h2>No Marvel Movies Came Out For This Year</h2>";
            } else {
                response.data.results.forEach(function (movie) {
                    var $comicListEl = placeMovieInDOM(movie);
                    getComicsBasedOnMovieTitle(movie, $comicListEl);
                });
            }
        });
    }

    function getComicsBasedOnMovieTitle(movie, $comicListEl) {
        var queryTerm = movie.original_title.substring(0, 9);
        marvelModule.searchMarvel(queryTerm, $comicListEl);
    }

    function placeMovieInDOM(movie) {

        var $li = document.createElement("li");

        var $h2 = document.createElement("h2");
        var $desc = document.createElement("div");
        $desc.classList.add("description");
        var $imgEl = document.createElement('div');
        var $contentDiv = document.createElement("div");
        $contentDiv.classList.add("response-content");
        var $comicList = document.createElement("div");
        $comicList.classList.add("comic-list");

        $h2.innerHTML = '<h2>' + movie.original_title + '</h2>';
        $imgEl.innerHTML = '<img src="http://image.tmdb.org/t/p/w500/' + movie.poster_path + '" alt="Movie Poster" class="moviePoster">';
        $desc.innerHTML = "<h2>Movie Description:</h2> <p>" + movie.overview + "</p>";
        $comicList.innerHTML = '<h2>Comic List:</h2><p class="loader"><img src="dist/img/loader.gif" class="loader"></p>';

        $li.appendChild($h2);
        $contentDiv.appendChild($imgEl);
        $contentDiv.appendChild($desc);
        $desc.appendChild($comicList);
        $li.appendChild($contentDiv);

        resultsEl.appendChild($li);

        return $comicList;
    }

    return {
        // sendDataToMarvel: sendDataToMarvel
    };
}();
//# sourceMappingURL=tmdb.js.map
