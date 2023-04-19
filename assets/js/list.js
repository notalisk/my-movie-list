//not sure if i actually need to link this the the site since we already have the data.

let movieSearchResultsJSON = localStorage.getItem('movieSearchResults');

let movieResultsArray = JSON.parse(movieSearchResultsJSON);

console.log(movieResultsArray);

resultsDisplay = document.getElementById('container')

///////////////////////////////////////////////
let GottaSeeItMovArry = JSON.parse('GottaSeeItMoviesStorArry')
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
gottaSeeItElemsArry.forEach(function(obj, index) {
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
}); ///idk i hope you guys liked that part

//seen it element 
let seenItArry = JSON.parse(seenItStorageArry)

seenIt1elem = document.getElementById('SeenIt1title')
seenIt2elem = document.getElementById('SeenIt2title')
seenIt3elem = document.getElementById('SeenIt3title')
seenIt4elem = document.getElementById('SeenIt4title')
seenIt5elem = document.getElementById('SeenIt5title')
seenIt6elem = document.getElementById('SeenIt6title')
seenIt7elem = document.getElementById('SeenIt7title')
seenIt8elem = document.getElementById('SeenIt8title')

seenItElemsArry = [seenIt1elem, seenIt2elem, seenIt3elem, seenIt4elem, seenIt5elem, seenIt6elem, seenIt7elem, seenIt8elem ]

seenItArry.forEach(function(obj, index) {
  if (index < seenItElemsArry.length) {
    seenItElemsArry[index].value = obj.title;
  }
});

///tv show objects and lists and function over object value

SeenTvElem1 = document.getElementById('seenTv1Title')
SeenTvElem2 = document.getElementById('seenTv2Title')
SeenTvElem3 = document.getElementById('seenTv3Title')
SeenTvElem4 = document.getElementById('seenTv4Title')
SeenTvElem5 = document.getElementById('seenTv5Title')
SeenTvElem6 = document.getElementById('seenTv6Title')
SeenTvElem7 = document.getElementById('seenTv7Title')
SeenTvElem8 = document.getElementById('seenTv8Title')

seenTvElemsArry = [seenIt1elem, seenIt2elem, seenIt3elem, seenIt4elem, seenIt5elem, seenIt6elem, seenIt7elem, seenIt8elem]

let SeenTvDataArry = JSON.parse('seenTvStoreArry')
SeenTvDataArry.forEach(function(obj, index) {
  if (index < seenTvElemsArry.length) {
    seenTvElemsArry[index].value = obj.title;
  }
});

///functions for the gotta see it Tv elements 

gottaSeeTvElem1 = document.getElementById('gottaSeeTv1Title')
gottaSeeTvElem2 = document.getElementById('gottaSeeTv2Title')
gottaSeeTvElem3 = document.getElementById('gottaSeeTv3Title')
gottaSeeTvElem4 = document.getElementById('gottaSeeTv4Title')
gottaSeeTvElem5 = document.getElementById('gottaSeeTv5Title')
gottaSeeTvElem6 = document.getElementById('gottaSeeTv6Title')
gottaSeeTvElem7 = document.getElementById('gottaSeeTv7Title')
gottaSeeTvElem8 = document.getElementById('gottaSeeTv8Title')

gottaSeeTvElmArry = [gottaSeeTvElem1, gottaSeeTvElem2, gottaSeeTvElem3, gottaSeeTvElem4, gottaSeeTvElem5, gottaSeeTvElem6, gottaSeeTvElem7, gottaSeeTvElem8]

// Welcome to the land of appending stuff!!
// Everything below this line works when everything above is commented out
// -----------------------------------------------------------------------

var tableSeen = document.querySelector("#table-seen");
var tableWant = document.querySelector("#table-want");
console.log(tableSeen);

// -------------------- TEST DATA -------------------
// Delete this section later please
var sampleMovieSeen1 = {
  title: "Finding Dory",
  like: true
}
var sampleMovieSeen2 = {
  title: "Teacup is the Best",
  like: false
}
var sampleSeens = [sampleMovieSeen1, sampleMovieSeen2];

var sampleMovieWant1 = "Airplane";
var sampleMovieWant2 = "Hot Shots: Part Deux";
var sampleWants = [sampleMovieWant1, sampleMovieWant2];

localStorage.setItem("seenMovies", JSON.stringify(sampleSeens));
localStorage.setItem("wantMovies", JSON.stringify(sampleWants));
// --------------------------------------------------

// Get movies from local storage
// (they should be stored as two separate lists, to easily determine where to display them)
var seenMovies = JSON.parse(localStorage.getItem("seenMovies"));
var wantToSeeMovies = JSON.parse(localStorage.getItem("wantMovies"));

// append movies to the list
function appendSeens() {
  // check to make sure there are movies in there (return if not)
  if (seenMovies.length == null) {
    return;
  }

  // Do some appending!!
  for (var i = 0; i < seenMovies.length; i++) {
    console.log(tableSeen);

    var trEl = document.createElement("tr");

    // create title td and set it to the title
    var tdTitle = document.createElement("td");
    tdTitle.textContent = seenMovies[i].title;

    console.log(tdTitle.text);

    var tdLove = document.createElement("td");
    var tdHate = document.createElement("td");
    tdLove.textContent = "❤️";
    tdHate.textContent = "👎";
    // hide stuff depending on love/hate
    if (seenMovies[i].like == true) {
      tdHate.textContent = " ";
    } else {
      tdLove.textContent = " ";
    }

    // heres the actual appending bit
    trEl.appendChild(tdTitle);
    trEl.appendChild(tdLove);
    trEl.appendChild(tdHate);
    tableSeen.appendChild(trEl);

  }
}

// call the function
appendSeens();