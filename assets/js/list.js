
// Welcome to the land of appending stuff!!
// Everything below this line works when everything above is commented out
// -----------------------------------------------------------------------

var tableSeen = document.querySelector("#table-seen");
var tableWant = document.querySelector("#table-want");

// -------------------- TEST DATA -------------------
// Delete this section later please
/*
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
*/
// --------------------------------------------------

// Get movies from local storage
// (they should be stored as two separate lists, to easily determine where to display them)
var seenMovies = JSON.parse(localStorage.getItem("seenMovies"));
var wantMovies = JSON.parse(localStorage.getItem("wantMovies"));

// append movies to the list
function appendSeens() {
  // check to make sure there are movies in there (return if not)
  if (seenMovies.length == null) {
    return;
  }

  // Do some appending!!
  for (var i = 0; i < seenMovies.length; i++) {

    var trEl = document.createElement("tr");

    // create title td and set it to the title
    var tdTitle = document.createElement("td");
    tdTitle.textContent = seenMovies[i].title;

    var tdLove = document.createElement("td");
    var tdHate = document.createElement("td");
    tdLove.textContent = "❤️";
    tdLove.className = "red-heart";
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

function appendWants() {
  // check to make sure there are movies in there (return if not)
  if (wantMovies.length == null) {
    return;
  }

  // Do some appending!!
  for (var i = 0; i < wantMovies.length; i++) {

    var trEl = document.createElement("tr");

    // create title td and set it to the title
    var tdTitle = document.createElement("td");
    tdTitle.textContent = wantMovies[i];

    // heres the actual appending bit
    trEl.appendChild(tdTitle);
    tableWant.appendChild(trEl);

  }
}

// call the function
appendSeens();
appendWants();