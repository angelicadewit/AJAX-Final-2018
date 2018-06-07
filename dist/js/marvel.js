"use strict";

var marvelModule = function () {

	var API_KEY = "9bccd1a3d349ce45f26368e58cd92682";

	function searchMarvel(queryTerm) {
		console.log("queryTerm", queryTerm);
		axios.get('http://gateway.marvel.com/v1/public/series', {
			params: {
				'apikey': API_KEY,
				'titleStartsWith': queryTerm
			},
			headers: {}
		}).then(function (response) {
			console.log('response:', queryTerm, response.data, response);
			generateSuccessHTMLOutput(response);
		});
		console.log(queryTerm);
	}

	// function generateSuccessHTMLOutput(response) {
	//   resultsEl.innerHTML = " ";
	//   response.data.results.forEach(result => {
	//       let $li = document.createElement("li")
	//       let $h2 = document.createElement("h2")
	//       $h2.classList.add("h2");
	//       let $movieDesc = document.createElement("p")
	//       let $imgEl = document.createElement('img');
	//       let $contentDiv = document.createElement("div")
	//       $contentDiv.classList.add("response-content")

	//         $h2.innerHTML = result.original_title
	//         $h2.classList.add("h2");
	//         $imgEl.src = "http://image.tmdb.org/t/p/w342/" + result.poster_path;
	//         $movieDesc.innerHTML = "<p>Movie Description:</p> <p>" + result.overview + "</p>"

	//       $li.appendChild($h2);
	//       $contentDiv.appendChild($imgEl);
	//       $contentDiv.appendChild($movieDesc);
	//       $li.appendChild($contentDiv)


	//       resultsEl.appendChild($li)

	//   })
	// }

	return {
		searchMarvel: searchMarvel
	};
}();
//# sourceMappingURL=marvel.js.map
