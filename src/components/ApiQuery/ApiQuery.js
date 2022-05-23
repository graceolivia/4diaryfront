import React from "react";
import { useState, useEffect } from "react";
import "./ApiQuery.css";
import MovieCard from "../MovieCard/MovieCard.js";

function ApiQuery() {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    fetch("http://127.0.0.1:3000/movies/")
      .then((response) => response.json())
      .then(
        (data) => {
          setMovies(data.data[0]);
          console.log(data.data[0]);
          setIsLoaded(true);
        },
        (error) => {
          setError(error);
          console.log(error);
          setIsLoaded(true);
        }
      );
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  } else if (!isLoaded) {
    return <div>Loading, please wait...</div>;
  } else {
    const moviesCards = (
      <MovieCard
        title={movies.attributes.title}
        genre={movies.attributes.genre}
      />
    );

    return (
      <div className="ApiQuery" data-testid="ApiQuery">
        {moviesCards}
        {/* <div>Title: {movies.attributes.title}</div>
        <div>Genre: {movies.attributes.genre}</div> */}
      </div>
    );
  }
}
ApiQuery.propTypes = {};

ApiQuery.defaultProps = {};

export default ApiQuery;
