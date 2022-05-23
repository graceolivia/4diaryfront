import React from "react";
import PropTypes from "prop-types";
import "./MovieCard.css";

function MovieCard(props) {
  const { title, genre } = props;
  return (
    <div>
      <p>Title: {title}</p>
      <p>Genre: {genre}</p>
    </div>
  );
}

export default MovieCard;
