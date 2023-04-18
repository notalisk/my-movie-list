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



let replacement_symbol = "_"
function theClick() {
  event.preventDefault();
  console.log('thebuttonwasclicked')
  const inputValue = userInput.value;
  console.log("Searching for movies...");
  console.log(inputValue)
  replacement_symbol = "%20"
fixedInput = inputValue.replace(" ", replacement_symbol)
console.log(fixedInput)
  myMovieSearchArry = ['https://moviesdatabase.p.rapidapi.com/titles/search/title/', fixedInput]
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


///function that stores inputs the results into the containers 

//array for the container elements
let imgCont1 = document.getElementById('img1')
let imgCont2 = document.getElementById('img2')
let imgCont3 = document.getElementById('img3')
let imgCont4 = document.getElementById('img4')
let imgCont5 = document.getElementById('img5')
let imgCont6 = document.getElementById('img6')
imgContArry = [imgCont1, imgCont2, imgCont3, imgCont5, imgCont6]
//loop over the elements with the urls
for (i=0, i < imgContArry.length, i++) {
  let imgcontArry[i] = results[i].primaryImage.url
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
  var titleElement = movieElement.querySelector(".title");
    var movTitle = titleElement.textContent;
    var imageElement = movieElement.querySelector(".image img");
    var img = imageElement.getAttribute("src");

    let movieItem = {
      title: movTitle,
      Imgurl: img,
    }
myStoredMovies.unshift(movieItem)
}
// hover over an image?? per

