import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import NavBar from "../components/NavBar";
import MainFeatured from "../components/MainFeatured";
import Featured from "../components/Featured";
import Footer from "../components/Footer";

const mainFeatured = {
  title: "WELCOME, PROFILE PAGE",
};

const featured = [
  {
    id: 1,
    image: "https://source.unsplash.com/random",
  },
  {
    id: 2,
    image: "https://source.unsplash.com/random",
  },
  {
    id: 3,
    image: "https://source.unsplash.com/random",
  },
  {
    id: 4,
    image: "https://source.unsplash.com/random",
  },
];

const theme = createTheme();

const ProfilePage = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <NavBar />
      <Container maxWidth="lg" sx={{ marginTop: "80px" }}>
        <main>
          <MainFeatured post={mainFeatured} />
          <Grid container spacing={3}>
            {featured.map((post) => (
              <Featured key={post.id} post={post} />
            ))}
          </Grid>
        </main>
      </Container>
      <Footer
        title="Footer"
        description="Something here to give the footer a purpose!"
      />
    </ThemeProvider>
  );
};

export default ProfilePage;
