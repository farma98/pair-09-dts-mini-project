import React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Rating from "@mui/material/Rating";
import { Link } from "react-router-dom";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

const CardSliderNow = (props) => {
  const baseUrlForMovie = "https://image.tmdb.org/t/p/w200";

  return (
    <Grid item xs={12} md={6}>
      <CardActionArea>
        <Card sx={{ display: "flex" }}>
          <CardContent sx={{ flex: 1 }}>
            <Typography component="h2" variant="h5">
              {props.movie.title}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
              {props.movie.popularity}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
              {props.movie.release_date}
            </Typography>
            <Rating
              value={(props.movie.vote_average * 2) / 2}
              precision={0.1}
              readOnly
              max={10}
            />
            <p></p>
            <Link to={`/detail/${props.movie.id}`}>Klik Detail</Link>
          </CardContent>
          <CardMedia
            component="img"
            sx={{ width: 160, display: { xs: "none", sm: "block" } }}
            src={`${baseUrlForMovie}${props.movie.poster_path}`}
            alt={props.movie.title}
          />
        </Card>
      </CardActionArea>
    </Grid>
  );
};

export default CardSliderNow;
