"use strict";

var marvelModule = function () {

	var API_KEY = "9bccd1a3d349ce45f26368e58cd92682";

	var resultsEl = document.querySelector('.description');

	function searchMarvel(queryTerm, $el) {
		console.log("queryTerm", queryTerm);
		axios.get('http://gateway.marvel.com/v1/public/series', {
			params: {
				'apikey': API_KEY,
				'titleStartsWith': queryTerm
			},
			headers: {}
		}).then(function (response) {
			console.log('response:', queryTerm, response.data, response);
			generateSuccessHTMLOutput(response, $el);
		});
		console.log(queryTerm);
	}

	function generateSuccessHTMLOutput(response, $el) {
		console.log("generateSuccessHTMLOutput response", response);
		response.data.data.results.forEach(function (result) {
			console.log(result.title);
			$el.innerHTML += result.title;
		});
	}

	return {
		searchMarvel: searchMarvel
	};
}();
//# sourceMappingURL=marvel.js.map
