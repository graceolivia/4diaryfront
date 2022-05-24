import React from "react";
import PropTypes from "prop-types";
import "./MovieCard.css";

function MovieCard(props) {
  const { title, genre } = props;
  return (
    <div id="MovieCard">
      <h3>Title: {title}</h3>
      <img
        src="https://upload.wikimedia.org/wikipedia/en/b/b6/Tenacious_d_in_the_pick_of_destiny_ver3.jpg"
        id="MovieImage"
      />
      <p>Genre: {genre}</p>
      <p>Release Date: </p>
      <p>Who does Jables Play: </p>
    </div>
  );
}

export default MovieCard;
