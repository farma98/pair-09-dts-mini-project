import tmdb from "../apis/tmdb";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const DetailMoviePage = () => {
  const baseUrlForMovie = "https://image.tmdb.org/t/p/w185";
  const [movies, setMovies] = useState([]);

  let { id } = useParams();

  const buttonPlayHandler = async () => {};

  useEffect(() => {
    const fetchDataMovies = async () => {
      try {
        const responseDariTMDB = await tmdb.get(`/movie/${id}`);
        setMovies(responseDariTMDB.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchDataMovies();
  }, [id]);

  return (
    <>
      <NavBar />
      <Container maxWidth="lg" style={{ marginTop: "50px" }}>
        <main>
          <Paper
            sx={{
              position: "relative",
              backgroundColor: "grey.800",
              color: "#fff",
              mb: 4,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundImage: `url(${baseUrlForMovie}${movies.backdrop_path})`,
            }}
          >
            <Box
              sx={{
                position: "absolute",
                top: 0,
                bottom: 0,
                right: 0,
                left: 0,
                backgroundColor: "rgba(0,0,0,.3)",
              }}
            />
            <Grid container sx={{ height: "80vh" }}>
              <Grid item md={8}>
                <Box
                  sx={{
                    position: "relative",
                    p: { xs: 3, md: 6 },
                    pr: { md: 0 },
                  }}
                >
                  <Typography
                    component="h1"
                    variant="h3"
                    color="inherit"
                    gutterBottom
                  >
                    {movies?.original_title}
                  </Typography>
                  <Typography variant="subtitle1" color="inherit" paragraph>
                    {movies.overview}
                  </Typography>
                  <Typography variant="h5" color="inherit" paragraph>
                    {movies.release_date}
                  </Typography>
                  <Button color="inherit" onClick={buttonPlayHandler}>
                    Play
                  </Button>
                </Box>
              </Grid>
              <Grid item md={4}>
                <Box
                  sx={{
                    position: "relative",
                    p: { xs: 3, md: 6 },
                    pr: { md: 0 },
                  }}
                >
                  {
                    <img
                      src={`${baseUrlForMovie}${movies.poster_path}`}
                      alt={movies?.original_title}
                    />
                  }
                </Box>
              </Grid>
            </Grid>
          </Paper>
          <Grid container>
            <Grid item>
              <Box>
                <iframe
                  src="https://www.youtube.com/embed/E7wJTI-1dvQ"
                  frameBorder="0"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                  title="video"
                  height="100%"
                  width="100%"
                />{" "}
              </Box>
            </Grid>
          </Grid>
        </main>
      </Container>
      <Footer
        title="Mahfudin Dwi Prasetyo"
        description="React Web Movie (Pair-09-REA2A)!"
      />
    </>
  );
};

export default DetailMoviePage;
