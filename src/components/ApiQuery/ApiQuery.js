import React from "react";
import { useState, useEffect } from "react";
import "./ApiQuery.css";

function ApiQuery() {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  useEffect(() => {
    fetch("http://127.0.0.1:3000/movies/")
      .then((response) => response.json())
      .then(
        (data) => {
          setMovies(data);
          console.log(movies);
        },
        (error) => {
          setMovies(error);
          console.log(movies);
        }
      );
  }, []);
  return (
    <div className="ApiQuery" data-testid="ApiQuery">
      [ {movies[0]} ]
    </div>
  );
}

ApiQuery.propTypes = {};

ApiQuery.defaultProps = {};

export default ApiQuery;
