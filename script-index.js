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


  myMovieSearchArry = ['https://moviesdatabase.p.rapidapi.com/titles/search/keyword/', inputValue, '?limit=20']
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
//lets called the stored arry "myStoredMovieFavs"
//lets call the array "MyFavMoviesArry" when it comes out
let MyFavMoviesArry = JSON.parse(myStoredMovieFavs)

//gotta see it list. 
gottaSeeIt1elem = document.getElementById('GSI1title')
gottaSeeIt2elem = document.getElementById('GSI2title')
gottaSeeIt3elem = document.getElementById('GSI3title')
gottaSeeIt4elem = document.getElementById('GSI4title')
gottaSeeIt5elem = document.getElementById('GSI5title')
gottaSeeIt6elem = document.getElementById('GSI6title')
gottaSeeIt7elem = document.getElementById('GSI7title')
gottaSeeIt8elem = document.getElementById('GSI8title')

gottaSeeItElemsArry = [gottaSeeIt1elem, gottaSeeIt2elem, gottaSeeIt3elem, gottaSeeIt4elem, gottaSeeIt5elem, gottaSeeIt6elem, gottaSeeIt7elem, gottaSeeIt8elem] 
 
//i need to loop over the arrays and draw out the titles of the movies from each object
MyFavMoviesArry.forEach(function(obj, index) {
  if (index < gottaSeeItElemsArry.length) {
    gottaSeeItElemsArry[index].value = obj.title;
  }
});

//love it hate it icons? ask team if we can maybe switch it to just an icon 
heartIcon1 = document.getElementById('heart1')
heartIcon2 = document.getElementById('heart2')
heartIcon3 = document.getElementById('heart3')
heartIcon4 = document.getElementById('heart4')
heartIcon5 = document.getElementById('heart5')
heartIcon6 = document.getElementById('heart6')
heartIcon7 = document.getElementById('heart7')
heartIcon8 = document.getElementById('heart8')
heartIcon9 = document.getElementById('heart9')

const heartIcons = document.querySelectorAll('img[id^="heart"]');
heartIcons.forEach(function(icon) {
  icon.addEventListener('click', function() {
    icon.src = 'heart-filled.png';
  });
}); /// i figured we can just add a little heart emoji thing  and a dull one. when u click it, then a brighter one will appear in its stead. i will write a function to save its status

//maybe this function is too hard... 

heartIcons.forEach((heartIcon, index) => {
  heartIcon.addEventListener('click', () => {
    // Toggle the "isLiked" property of its movie object
    MyFavMoviesArry[index].isLiked = !MyFavMoviesArry[index].isLiked;

    // Update the heart icon image based on the new "isLiked" status
    if (movies[index].isLiked) {
      heartIcon.src = 'liked-heart.png';
    } else {
      heartIcon.src = 'dull-heart.png';
    }
  });
}); ///idk i hope you guys like this part