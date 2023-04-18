

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

movieClicker.addEventListener('click', theButtonWasClicked);
function theButtonWasClicked() {
  event.preventDefault();
  console.log('thebuttonwasclicked')
  const inputValue = userInput.value;
  console.log(userInput.value)


  myMovieSearchArry = ['https://moviesdatabase.p.rapidapi.com/titles/search/title/', inputValue, '?limit=4']
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
};
/// 
//function that pulls out the array of movie data from local storage 
//lets called the stored arry "seenItStorageArry"
//lets call the array "MyFavMoviesArry" when it comes out



//////////////////////// day 1 changes
//let gottaTvDataArry = JSON.parse('gottaSeeTvStoreArry')
//gottaTvDataArry.forEach(function(obj, index) {
// if (index < gottaSeeTvElmArry.length) {
//  gottaSeeTvElmArry[index].value = obj.title;
// }
//})


let movieSearchResultsJSON = localStorage.getItem('movieSearchResults');

let movieResultsArray = JSON.parse(movieSearchResultsJSON);

console.log(movieResultsArray);
//array of title containers
let ResultTitle1 = document.getElementById('titleSec1')
let ResultTitle2 = document.getElementById('titleSec2')
let ResultTitle3 = document.getElementById('titleSec3')
let ResultTitle4 = document.getElementById('titleSec4')
let ResultTitleArry = [ResultTitle1, ResultTitle2, ResultTitle3, ResultTitle4]

//target the image containers. (make an array of image containers and then eventually populate them with a loop) 
let resultsImg1 = document.getElementById('imgsection1')
let resultsImg2 = document.getElementById('imgsection2')
let resultsImg3 = document.getElementById('imgsection3')
let resultsImg4 = document.getElementById('imgsection4')
let resultImgArry = [resultsImg1, resultsImg2, resultsImg3, resultsImg4]

//call the image from the results array 
//let Img1FrmResults = movieResultsArray.results[0].primaryImage
//console.log(Img1FrmResults.url)
//resultsImg1.src = Img1FrmResults.url;

//let title1 = movieResultsArray.results[0].titleText.text;
//let ResultTitle1 = document.getElementById('titleSec1')
//console.log(title1);
//ResultTitle1.textContent = title1

//make an array of image result elements
console.log(movieResultsArray.results[0].primaryImage.url)

///loop for img results population
for (let i = 0; i < movieResultsArray.results.length; i++) {
  if (movieResultsArray.results[i].primaryImage !== null) {
    
    resultImgArry[i].src = movieResultsArray.results[i].primaryImage.url
  } else {
    resultImgArry[i].src = './assets/defaultMissing.png';
  }
}
// loop for movie titles pop
for (let j = 0; j < ResultTitleArry.length; j++) {
  if (movieResultsArray.results[j].titleText.text !== null) {
    ResultTitleArry[j].textData = movieResultsArray.results[j].titleText.text;
  } else {
    ResultTitleArry[j].textData = "Sorry No Result Listed"
  }
}

