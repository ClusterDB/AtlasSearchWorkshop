import React, { useState, useEffect } from "react";

// Components
import Header from "./Header";
import Grid from "./Grid/Grid";
import Thumb from "./Thumb/Thumb";
import Filter from "./Filter/Filter";
import EndPoints from "./EndPoints";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [showFilter, setShowFilter] = useState(false);
  const [dateStart, setDateStart] = useState(new Date(1970, 12, 1));
  const [dateEnd, setDateEnd] = useState(new Date(2022, 1, 4));
  const [genre, setGenre] = useState({ value: "", label: "" });
  const [rating, setRating] = useState(0);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [showNeedEndpointMessage, setShowNeedEndpointMessage] = useState(false);
  
  // INSERT YOUR CREATED MOVIE ENDPOINTS
  const [moviesEndpoint, setMoviesEndpoint] = useState('');
  const [titlesEndpoint, setTitlesEndpoint] = useState('');

  const fetchMovies = async (searchTerm) => {
    console.log("HITTING FETCH MOVIES API");
    console.log("SEARCHTERM: ", searchTerm);

    try {
      // BASIC SEARCH - append searchTerm as URL parameter to GET endpoint
      const endpoint = moviesEndpoint + "?searchTerm=" + searchTerm; //+ "&rating=" + rating;
      const returnedMovies = await (await fetch(endpoint)).json();
      setMovies(returnedMovies);
      console.log("MOVIES: ", returnedMovies);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (!submitted) return;
    if (moviesEndpoint === "") {
      setShowNeedEndpointMessage(true);
      return;
    }

    fetchMovies(searchTerm);
    setShowSuggestions(false);
    setSubmitted(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [submitted]);

  return (
    <>
      {" "}
      <EndPoints
        moviesEndpoint={moviesEndpoint}
        setMoviesEndpoint={setMoviesEndpoint}
        titlesEndpoint={titlesEndpoint}
        setTitlesEndpoint={setTitlesEndpoint}
      />
      <Header
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        setShowFilter={setShowFilter}
        showFilter={showFilter}
        setMovies={setMovies}
        setSubmitted={setSubmitted}
        showSuggestions={showSuggestions}
        setShowSuggestions={setShowSuggestions}
        titlesEndpoint={titlesEndpoint}
      />
      <div className="container">
        {showFilter && (
          <Filter
            dateStart={dateStart}
            dateEnd={dateEnd}
            setDateStart={setDateStart}
            setDateEnd={setDateEnd}
            genre={genre}
            setGenre={setGenre}
            rating={rating}
            setRating={setRating}
            setSubmitted={setSubmitted}
            searchTerm={searchTerm}
          />
        )}

        {showNeedEndpointMessage ? (
          <div className="needEndpoint">Build Movie 📽️ Endpoint Please 🥺</div>
        ) : (
          <Grid header={searchTerm ? null : "Movie Search Results"}>
            {movies.map((movie) => (
              <Thumb
                key={movie._id}
                movie={movie}
                clickable
                movieID={movie._id}
                image={
                  movie.poster ? movie.poster : "http://bit.ly/AtlasMoviePoster"
                }
              ></Thumb>
            ))}
          </Grid>
        )}
      </div>{" "}
    </>
  );
};

export default Home;
