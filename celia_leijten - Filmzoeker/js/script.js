// hoe implementeer ik DOM eventlistener?

document.addEventListener("DOMContentLoaded", (event) => {
  console.log("de DOM is geladen!");
}); //dom event

// URL builder

const createUrl = (poster, imdbid) => {
  const liContent =
    '<a href="https://www.imdb.com/title/' +
    imdbid +
    '" target=_blank><img src=' +
    poster +
    ">";
  return liContent;
};

// Films toevoegen aan de DOM

const addMoviesToDom = (movieArray) => {
  // console.log("dit zijn alle films", movieArray);
  const movieUl = document.getElementById("filmContainer");
  while (movieUl.firstChild) movieUl.removeChild(movieUl.firstChild);
  // console.log(movieUl);

  const moviePoster = movieArray.map((movie) => {
    const poster = movie.Poster;
    return movie;
  });

  moviePoster.forEach((element) => {
    const movieLi = document.createElement("li");
    // console.log("film", element);
    // console.log("posterlocatie", element);
    const p = element.Poster;
    const i = element.imdbID;
    movieLi.innerHTML = createUrl(p, i);
    movieUl.appendChild(movieLi);
  });
};

addMoviesToDom(movies);

// Search movies on search term

const filterMovies = (searchterm) => {
  // console.log("in filter array function: ", searchterm);
  const movieSrch = searchterm;
  const filterMovieArray = movies.filter((movie) => {
    // console.log("hier wordt op gezocht", movieSrch);
    x = movie.Title.search(movieSrch);
    // console.log("x is", x);

    if (x != -1) {
      // console.log("geselecteerde films: ", movie);
      //
      return movie;
    }
  });
  addMoviesToDom(filterMovieArray);
};

// filter movies on year > 2014

const filterLatestMovies = () => {
  const filterMovieArray2 = movies.filter((movie) => {
    const yearInt = parseInt(movie.Year.substr(0, 4));

    //console.log(yearInt);
    if (yearInt > 2014) {
      return movie;
    }
  });
  //console.log("de nieuwste films", filterMovieArray2);
  addMoviesToDom(filterMovieArray2);
  // console.log("movie array filter:", filterMovieArray)
};

// Op welke radio button is geklikt

const handleOnChangeEvent = (radio) => {
  //console.log("radio button is checked", radio.target.value);
  const expr = radio.target.value;
  switch (expr) {
    case "avengers":
      const searchtermAvengers = "Avengers";
      console.log(searchtermAvengers);
      filterMovies(searchtermAvengers);
      break;
    case "xmen":
      const searchtermXMen = "X-Men";
      filterMovies(searchtermXMen);
      break;
    case "princess":
      const searchtermPrincess = "Princess";
      filterMovies(searchtermPrincess);
      break;
    case "batman":
      const searchtermBatman = "Batman";
      filterMovies(searchtermBatman);
      break;
    case "nieuwstefilms":
      filterLatestMovies();
      break;
  }
};

//Eventlistener radio buttons

const addEventListners = () => {
  const radiochk = document.getElementsByName("film");
  const radioArray = Array.from(radiochk);
  //console.log(radioArray);

  radioArray.forEach((item) => {
    item.addEventListener("change", handleOnChangeEvent);
  });
};

addEventListners();

// text input gebruiken als search term

const handleOnTextInput = () => {
  const textInput = document.getElementById("filmtitle").value;
  filterMovies(textInput);
};

// const eventListener Button

const btn = document.getElementById("submit");
//console.log(btn);
btn.addEventListener("click", handleOnTextInput);
