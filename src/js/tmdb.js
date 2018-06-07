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
            generateSuccessHTMLOutput(response);
            sendDataToMarvel(response)
          });    
    }
    
    function generateSuccessHTMLOutput(response) {
      resultsEl.innerHTML = " ";
      response.data.results.forEach(result => {
        let $li = document.createElement("li")
        let $h2 = document.createElement("h2")
        $h2.classList.add("h2");
        let $movieDesc = document.createElement("p")
        let $imgEl = document.createElement('img');
        let $contentDiv = document.createElement("div")
        $contentDiv.classList.add("response-content")

        $h2.innerHTML = result.original_title
        $h2.classList.add("h2");
        $imgEl.src = "http://image.tmdb.org/t/p/w342/" + result.poster_path;
        $movieDesc.innerHTML = "<p>Movie Description:</p> <p>" + result.overview + "</p>"

        $li.appendChild($h2);
        $contentDiv.appendChild($imgEl);
        $contentDiv.appendChild($movieDesc);
        $li.appendChild($contentDiv)


        resultsEl.appendChild($li)

      })
    }

    function sendDataToMarvel(response){
        var charactersArray = []
        response.data.results.forEach(result => {
            const queryTerm = result.original_title.substring(0,7)
            charactersArray.push(queryTerm)
            marvelModule.searchMarvel(queryTerm)
        })
        console.log(charactersArray)
    }
        
    return {
        sendDataToMarvel: sendDataToMarvel
    }
    
    
    
}());
    