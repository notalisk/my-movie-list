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

function theClick() {
  event.preventDefault();
  console.log('thebuttonwasclicked')
  const inputValue = userInput.value;
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
};
