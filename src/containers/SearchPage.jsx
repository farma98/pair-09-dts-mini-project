import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import CardSearchPage from "../components/CardSearchPage";
import SearchMovie from "../components/SearchMovie";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import axios from "axios";

const SearchPage = () => {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("Pocket");

  useEffect(() => {
    const fetchDataMovies = async () => {
      try {
        const { data } = await axios.get(
          `https://api.themoviedb.org/3/search/movie?api_key=9986c64c9c82e256e873a33de451a009&language=en-US&query=${search}&page=1&include_adult=false`
        );
        setMovies(data.results);
      } catch (error) {
        console.error("Link Salah!");
      }
    };
    fetchDataMovies();
  }, [search]);

  return (
    <>
      <NavBar />
      <Container maxWidth="lg" style={{ marginTop: "80px" }}>
        <SearchMovie onClick={(value) => setSearch(value)} />
        <main style={{ marginTop: "50px" }}>
          <Typography component="h2" variant="h5">
            SEARCH MOVIE
          </Typography>
          <Grid container spacing={4}>
            {movies.map((movie) => {
              return <CardSearchPage key={movie.id} movie={movie} />;
            })}
          </Grid>
        </main>
      </Container>
      <Footer
        title="Mahfudin Dwi Prasetyo"
        description="React Web Movie (Pair-09-REA2A)!"
      />

      {/* {search &&
        (!movies ? <h2>No Series Found</h2> : <h2>No Movies Found</h2>)} */}
    </>
  );
};

export default SearchPage;
