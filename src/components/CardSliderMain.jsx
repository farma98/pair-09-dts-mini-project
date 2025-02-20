import React from "react";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";

const CardSliderMain = (props) => {
  const baseUrlForMovie = "https://image.tmdb.org/t/p/w200";

  return (
    <Paper
      sx={{
        position: "relative",
        backgroundColor: "grey.800",
        color: "#fff",
        mb: 4,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundImage: `url(${baseUrlForMovie}${props.movie.backdrop_path})`,
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
      <Grid container>
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
              {props.movie.title}
            </Typography>
            <Typography variant="subtitle1" color="inherit" paragraph>
              {props.movie.overview}
            </Typography>
            <Typography variant="h5" color="inherit" paragraph>
              {props.movie.release_date}
            </Typography>
            <Link to={`/detail/${props.movie.id}`}>Klik Detail</Link>
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
                src={`${baseUrlForMovie}${props.movie.poster_path}`}
                alt={props.movie.title}
              />
            }
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default CardSliderMain;
