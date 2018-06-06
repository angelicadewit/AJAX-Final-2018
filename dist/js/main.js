"use strict";

(function () {

    var API_KEY = "9bccd1a3d349ce45f26368e58cd92682";
    var apikey = "fa54120f63963b0660df915a9c213691";

    var termEl = document.querySelector('.searchInput');
    var searchBtn = document.querySelector('.searchBtn');
    var resultsEl = document.getElementById('results');

    searchBtn.addEventListener('click', function (e) {
        e.preventDefault();
        var queryTerm = termEl.value;
        searchYelp(queryTerm);
    });

    // function searchYelp(queryTerm){
    //   axios.get('http://gateway.marvel.com/v1/public/characters', {
    //       params: {
    //         'apikey': API_KEY,
    //         'name': queryTerm,
    //       },
    //       headers: {

    //       }
    //     }).then(function (response) {
    //         console.log('response:', response.data, response)
    //         // generateSuccessHTMLOutput(response);
    //       });    
    // }


    function searchYelp(queryTerm) {
        axios.get('https://api.themoviedb.org/3/discover/movie', {
            params: {
                'api_key': apikey,
                'primary_release_year': queryTerm,
                'with_keywords': '180547'
            },
            headers: {}
        }).then(function (response) {
            console.log('response:', response.data, response);
            // generateSuccessHTMLOutput(response);
        });
    }

    // function generateSuccessHTMLOutput(response) {
    //   resultsEl.innerHTML = " ";
    //   response.data.businesses.forEach(business => {
    //       let $li = document.createElement("li")
    //       let $h2 = document.createElement("h2")
    //       let $pAddress = document.createElement("p")
    //       let $pCity = document.createElement("p")
    //       const $imgEl = document.createElement('img');

    //       $h2.innerHTML = '<a href="' + business.url + '">' + business.name + '</a>' + " - " + business.price + " - " + business.rating
    //       $imgEl.src = business.image_url;
    //       $imgEl.style.width = '300px';
    //       $imgEl.style.height = '200px';
    //       $pAddress.innerHTML = business.location.address1
    //       $pCity.innerHTML = business.location.city + " " + business.location.zip_code
    //       $pCity.style.marginBottom = "5px";

    //       $li.appendChild($h2);
    //       $li.appendChild($imgEl);
    //       $li.appendChild($pAddress);
    //       $li.appendChild($pCity);


    //       resultsEl.appendChild($li)
    //   })
    // }

})();
//# sourceMappingURL=main.js.map
