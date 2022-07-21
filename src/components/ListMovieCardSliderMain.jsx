import tmdb from "../apis/tmdb";
import React, { useEffect, useState } from "react";
import Carousel from "react-material-ui-carousel";
import CardSliderMain from "../components/CardSliderMain";

const ListMovieCardSliderMain = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchDataMovies = async () => {
      try {
        const responseDariTMDB = await tmdb.get("/movie/popular");
        setMovies(responseDariTMDB.data.results);
      } catch (err) {
        console.log(err);
      }
    };

    fetchDataMovies();
  }, []);

  return (
    <Carousel
      indicators={false}
      navButtonsProps={{
        style: {
          backgroundColor: "cornflowerblue",
          borderRadius: 0,
        },
      }}
      navButtonsWrapperProps={{
        style: {
          bottom: "0",
          top: "unset",
        },
      }}
      NextIcon="next"
      PrevIcon="prev"
    >
      {movies.map((movie) => {
        return <CardSliderMain key={movie.title} movie={movie} />;
      })}
    </Carousel>
  );
};

export default ListMovieCardSliderMain;
