import React, { useEffect, useState } from "react";
import "./Movies.css";
const Movies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);

  return <div></div>;
};

export default Movies;
