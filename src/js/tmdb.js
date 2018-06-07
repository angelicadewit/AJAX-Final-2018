var movieModule = (function() {

    const API_KEY = "9bccd1a3d349ce45f26368e58cd92682"
    const apikey = "fa54120f63963b0660df915a9c213691"
    
    const termEl = document.querySelector('.searchInput');
    const searchBtn = document.querySelector('.searchBtn');
    const resultsEl = document.getElementById('results');
    
    searchBtn.addEventListener('click',function(e) {
        e.preventDefault();
        const queryTerm = termEl.value;
        searchMovie(queryTerm)
    })


    function searchMovie(queryTerm){
        axios.get('https://api.themoviedb.org/3/discover/movie', {
            params: {
                'api_key': apikey,
                'primary_release_year': queryTerm,
                'with_keywords': '180547',
            },
            headers: {
        
            }
        }).then(function (response) {
            console.log('response:', response.data, response)
            response.data.results.forEach(movie => {
                let $comicListEl = placeMovieInDOM(movie);
                getComicsBasedOnMovieTitle(movie, $comicListEl);
            });
        });    
    }
    
    function getComicsBasedOnMovieTitle(movie, $comicListEl){
        const queryTerm = movie.original_title.substring(0,7)
        marvelModule.searchMarvel(queryTerm, $comicListEl)
    }



    function placeMovieInDOM(movie) {
        let $li = document.createElement("li")
        let $h2 = document.createElement("h2")
        $h2.classList.add("h2");
        let $desc = document.createElement("div")
        $desc.classList.add("description");
        let $imgEl = document.createElement('img');
        let $contentDiv = document.createElement("div")
        $contentDiv.classList.add("response-content")
        let $comicList = document.createElement("div")
        $comicList.classList.add("comic-list");

        $h2.innerHTML = movie.original_title
        $h2.classList.add("h2");
        $imgEl.src = "http://image.tmdb.org/t/p/w342/" + movie.poster_path;
        $desc.innerHTML = "<p>Movie Description:</p> <p>" + movie.overview + "</p>"

        $li.appendChild($h2);
        $contentDiv.appendChild($comicList);
        $contentDiv.appendChild($imgEl);
        $contentDiv.appendChild($desc);
        $li.appendChild($contentDiv)


        resultsEl.appendChild($li)

        return $comicList;
    }

        
    return {
        // sendDataToMarvel: sendDataToMarvel
    }
    
    
    
}());
    