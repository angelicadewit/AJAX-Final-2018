var marvelModule = (function() {

	const API_KEY = "9bccd1a3d349ce45f26368e58cd92682"

	const resultsEl = document.querySelector('.description');

	function searchMarvel(queryTerm, $el){
		console.log("queryTerm", queryTerm)
		axios.get('http://gateway.marvel.com/v1/public/series', {
			params: {
				'apikey': API_KEY,
				'titleStartsWith': queryTerm,
			},
			headers: {
		 
			}
		}).then(function (response) {
			console.log('response:', queryTerm, response.data, response)
			generateSuccessHTMLOutput(response, $el);
		});    
		console.log(queryTerm)
	}
	
	function generateSuccessHTMLOutput(response, $el) {
		console.log("generateSuccessHTMLOutput response", response)
		$el.innerHTML += "<h2>Comic List:</h2>"
		response.data.data.results.forEach(comic => {
			$el.innerHTML += '<p> <a href="' + comic.urls[0].url + '" target="_blank">' + comic.title + '</a></p>'	
	  	})
	}

	return {
		searchMarvel: searchMarvel
	}

	
	}());
	