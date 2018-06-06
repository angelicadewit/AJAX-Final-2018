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
          });    
    }
    
    function generateSuccessHTMLOutput(response) {
      resultsEl.innerHTML = " ";
      response.data.results.forEach(result => {
          let $li = document.createElement("li")
          let $h1 = document.createElement("h2")
          let $movieDesc = document.createElement("p")
        //   let $pCity = document.createElement("p")
          const $imgEl = document.createElement('img');

            $h1.innerHTML = result.original_title
            $imgEl.src = "http://image.tmdb.org/t/p/w342/" + result.poster_path;
        //   $imgEl.style.width = '300px';
        //   $imgEl.style.height = '200px';
            $movieDesc.innerHTML = result.overview
        //   $pCity.style.marginBottom = "5px";
    
          $li.appendChild($h1);
          $li.appendChild($imgEl);
          $li.appendChild($movieDesc);
        //   $li.appendChild($pCity);
    
    
          resultsEl.appendChild($li)

      })
    }
    
    
    
    }());
    