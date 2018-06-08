var marvelModule = (function() {

	const API_KEY = "9bccd1a3d349ce45f26368e58cd92682"
	// const API_KEY_TWO = 
	// let ts = new Date().getTime();
	// let hash = CryptoJS.MD5(ts + API_KEY + PUBLIC_KEY).toString();

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
			$el.querySelector(".loader").style.display ="none"
		});    
		console.log(queryTerm)
	}
	
	function generateSuccessHTMLOutput(response, $el) {
		console.log("generateSuccessHTMLOutput response", response)
		if (response.data.data.results == 0){
			$el.innerHTML += '<p>There are no comics listed</p>'	
		} else { 
			response.data.data.results.forEach(comic => {
				$el.innerHTML += '<p> <a href="' + comic.urls[0].url + '" target="_blank">' + comic.title + '</a></p>'
			})
		}
	}

	return {
		searchMarvel: searchMarvel
	}

	
	}());
	