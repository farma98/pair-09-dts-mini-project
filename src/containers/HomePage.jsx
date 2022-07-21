import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import NavBar from "../components/NavBar";
import ListMovieCardSliderMain from "../components/ListMovieCardSliderMain";
import ListMovieCardSliderNow from "../components/ListMovieCardSliderNow";
import Footer from "../components/Footer";

const theme = createTheme();

const HomePage = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <NavBar />
      <div style={{ marginTop: "50px" }}>
        <ListMovieCardSliderMain />
      </div>
      <Container maxWidth="lg">
        <main style={{ marginTop: "50px" }}>
          <Typography component="h2" variant="h5">
            TOP RATING MOVIE
          </Typography>
          <Grid container spacing={4} style={{ marginTop: "25px" }}>
            <ListMovieCardSliderNow />
          </Grid>
        </main>
      </Container>
      <Footer
        title="Mahfudin Dwi Prasetyo(Solo Player)"
        description="React Web Movie (Pair-09-REA2A)!"
      />
    </ThemeProvider>
  );
};

export default HomePage;
