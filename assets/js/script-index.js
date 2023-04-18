const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '9f54f93e1bmsh4f1461416784f68p126072jsn54ef2f5c1d11',
    'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
  }
};
//function searchMoviesByTitle(title) {
//const url = `${searchUrlStart}${title}${searchUrlEnd}`;
// fetch(url, options)
// .then(response => response.json())
// .then(data => {
//  console.log("received")
//})
//.catch(error => console.error(error));
//}
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



function theClick() {
  event.preventDefault();
  console.log('thebuttonwasclicked')
  const inputValue = userInput.value;
  console.log("Searching for movies...");
  console.log(userInput.value)
  myMovieSearchArry = ['https://moviesdatabase.p.rapidapi.com/titles/search/keyword/', inputValue, '?limit=10']
  movieSearchString = myMovieSearchArry.join('')
  console.log(myMovieSearchArry)
  console.log(movieSearchString)
  fetch(movieSearchString, options)
    .then(response => response.json())
    .then(response => {
      localStorage.setItem('movieSearchResults', JSON.stringify(response));
      console.log(response);
    })
    .catch(err => console.error(err));
  alert('Stored!')



}
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




///need a function that indexes over the array and pulls the image urls and populates them into the image containers



//need a function that loops over the moviesearch array and pulls out the titles 

//need a function that stores saved movies into an array in local storage
////create the array 
let myStoredMovies = [];

function storeMovie() {
  const clickedElement = event.target;
  const value1 = clickedElement.parentNode.parentNode.dataset.value1;
  //something like above to get the title of the movie 
  const value2 = clickedElement.parentNode.dataset.value2;
  //something like this to get the image url? probably not close syntax tho
  

}