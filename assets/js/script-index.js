var movieClicker = document.getElementById('button1')
const userInput = document.getElementById('search');
const selector = document.getElementById('searchType')

//code selects the search button element and all the card elements, and adds an event listener to the search button that changes the display property of each card to block when the button is clicked.
const searchButton = document.getElementById("button1");
const cards = document.querySelectorAll(".card");

searchButton.addEventListener("click", () => {
  cards.forEach(card => {
    card.style.display = "block";
  });
});


let replacement_symbol = "_"


function theClick() {
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'b4653a9300msh9edce1d2439a532p1ecf5ejsn6f47fc20c7fd',
      'X-RapidAPI-Host': 'advanced-movie-search.p.rapidapi.com'
    }
  };

  event.preventDefault();
  //console.log('thebuttonwasclicked')
  const inputValue = userInput.value;
  //console.log("Searching for movies...");
  //console.log(inputValue)
  replacement_symbol = "%20"
  fixedInput = inputValue.replace(" ", replacement_symbol)
  //console.log(fixedInput)
  myMovieSearchArry = ['https://advanced-movie-search.p.rapidapi.com/search/movie?query=', fixedInput,'&page=1']
  movieSearchString = myMovieSearchArry.join('')
  //console.log(myMovieSearchArry)
  //console.log(movieSearchString)
  fetch(movieSearchString, options)
    .then(response => response.json())
    .then(response => {
      // console.log(response)
      localStorage.setItem('movieSearchResults', JSON.stringify(response));
      pushResults();
    })
  //   .catch(err => console.error(err));
  // alert('Stored!');
 


}


// function pushResults() {
//   // Array for the container elements
//   let imgCont1 = document.getElementById('card1');
//   let imgCont2 = document.getElementById('card2');
//   let imgCont3 = document.getElementById('card3');
//   let imgCont4 = document.getElementById('card4');
//   let imgCont5 = document.getElementById('card5');

//   let imgContArry = [imgCont1, imgCont2, imgCont3, imgCont4, imgCont5];
  
//   let title1 = document.getElementById('title1');
//   let title2 = document.getElementById('title2');git add 
//   let title3 = document.getElementById('title3');
//   let title4 = document.getElementById('title4');
//   let title5 = document.getElementById('title5');

//   let titleArray = [title1, title2, title3, title4, title5];

function pushResults() {
  const numCards = 5;
  const imgContArry = []
  const titleArray = [];

   for (let i = 1; i <= numCards; i++) {
    const imgCont = document.getElementById(`card${i}`);
    const title = document.getElementById(`title${i}`);
    imgContArry.push(imgCont);
    titleArray.push(title);
  }


  // Get movieSearchResults from local storage
  let movieSearchResults = JSON.parse(localStorage.getItem('movieSearchResults'));
  console.log(movieSearchResults);
  // Loop over the elements with the URLs
  for (let i = 0; i < imgContArry.length; i++) {
    // Check if the movieSearchResults array has enough items to populate all the cards
    if (movieSearchResults && movieSearchResults.results.length > i && movieSearchResults.results[i].poster_path) {
      imgContArry[i].src = `https://image.tmdb.org/t/p/original/${movieSearchResults.results[i].poster_path}`;
    } else {
      imgContArry[i].src= " "
    }
  }
  for (let i = 0; i < titleArray.length; i++) {
    // Check if the movieSearchResults array has enough items to populate all the titles
    if (movieSearchResults && movieSearchResults.results.length > i && movieSearchResults.results[i].title) {
      titleArray[i].textContent = movieSearchResults.results[i].title;
    } else {
      titleArray[i].textContent = ''; // Set empty text if no title is available
    }
  }
}

// Get streaming services
$(".stream-btn").click(function() {
  var title = $(this).siblings("h3").text();
  var parent = $(this).parent(".card");

  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '23ba83f50amsh2809e1dd2658e65p1653c7jsnd62035b3967b',
      'X-RapidAPI-Host': 'streaming-availability.p.rapidapi.com'
    }
  };

  fetch('https://streaming-availability.p.rapidapi.com/v2/search/title?title=' + title + '&country=us&show_type=movie&output_language=en', options)
    .then(response => response.json())
    .then(response => {
      var streaming = response.result[0].streamingInfo.us;

      Object.keys(streaming).forEach(function(key, i) {
        var optionEl = document.createElement("p");
        optionEl.textContent = key;
        
        parent[0].appendChild(optionEl);
      });
    })
    .catch(err => console.error(err));
});

//// fetch for later 
//const options1 = {
// method: 'GET',
//  headers: {
//    'X-RapidAPI-Key': 'b4653a9300msh9edce1d2439a532p1ecf5ejsn6f47fc20c7fd',
//    'X-RapidAPI-Host': 'streaming-availability.p.rapidapi.com'
//  }
//};

// need a function that calls this api when the div container to the result is clicked 
//fetch(`https://streaming-availability.p.rapidapi.com/v2/search/title?title=${(variable that takes the title info)}& country=us & show_type=movie & output_language=en`, options)
//	.then(response => response.json())
//	.then(response => console.log(response))
//	.catch(err => console.error(err));



/*
let myStoredMovies = [];

function storeMovie(event) {
  console.log('store function is being called');
  const clickedElement = event.target;
  var titleElement = clickedElement.querySelector(".title");
  var movTitle = titleElement.textContent;
  var imageElement = clickedElement.querySelector(".image img");
  var img = imageElement.getAttribute("src");

  var movieItem = {
    title: movTitle,
    like: true
  }

  myStoredMovies.unshift(movieItem);
  localStorage.setItem('myMovies', JSON.stringify(myStoredMovies));
}
var movieElements = document.querySelectorAll(".movie");
movieElements.forEach(function(movieElement) {
  movieElement.addEventListener('click', storeMovie);
});
*/

$(".store-loved-btn").click(function() {
  var title = $(this).siblings("h3").text();
  var rating = $(this).siblings("input").val();
  var seenMovie = {
    title: title,
    like: true,
    rating: rating, 
  }

  var seenMovies = JSON.parse(localStorage.getItem("seenMovies"))||[]

  if (seenMovies.length == null) {
    seenMovies = [seenMovie];
  } else {
    seenMovies.push(seenMovie);
  }

  localStorage.setItem("seenMovies", JSON.stringify(seenMovies));
});

$(".store-hated-btn").click(function() {
  var title = $(this).siblings("h3").text();
  //console.log(title);
  var rating = $(this).siblings("input").val();
  
  var seenMovie = {
    title: title,
    like: false,
    rating: rating, 
  }

  var seenMovies = JSON.parse(localStorage.getItem("seenMovies"))||[]

  if (seenMovies.length == null) {
    seenMovies = [seenMovie];
  } else {
    seenMovies.push(seenMovie);
  }

  localStorage.setItem("seenMovies", JSON.stringify(seenMovies));
});

$(".store-want-btn").click(function() {
  var title = $(this).siblings("h3").text();
  
  
  var wantMovie = title;

  var wantMovies = JSON.parse(localStorage.getItem("wantMovies"))||[]

  if (wantMovies.length == null) {
    wantMovies = [wantMovie];
  } else {
    wantMovies.push(wantMovie);
  }

  localStorage.setItem("wantMovies", JSON.stringify(wantMovies));
});

//