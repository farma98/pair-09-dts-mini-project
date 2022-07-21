import tmdb from "../apis/tmdb";
import React, { useEffect, useState } from "react";
import CardSliderNow from "../components/CardSliderNow";

const ListMovieCardSliderNow = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchDataMovies = async () => {
      try {
        const responseDariTMDB = await tmdb.get("/movie/top_rated");
        setMovies(responseDariTMDB.data.results);
      } catch (err) {
        console.log(err);
      }
    };

    fetchDataMovies();
  }, []);

  return (
    <>
      {movies.map((movie) => {
        return <CardSliderNow key={movie.title} movie={movie} />;
      })}
    </>
  );
};

export default ListMovieCardSliderNow;
