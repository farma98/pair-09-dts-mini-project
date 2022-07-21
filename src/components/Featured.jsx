import React from "react";
import PropTypes from "prop-types";
import Grid from "@mui/material/Grid";
import CardMedia from "@mui/material/CardMedia";

function Featured(props) {
  const { post } = props;

  return (
    <Grid item>
      <CardMedia
        component="img"
        sx={{ width: 160, height: 160 }}
        image={post.image}
        alt="Logo"
      />
    </Grid>
  );
}

Featured.propTypes = {
  post: PropTypes.shape({
    image: PropTypes.string.isRequired,
  }).isRequired,
};

export default Featured;
