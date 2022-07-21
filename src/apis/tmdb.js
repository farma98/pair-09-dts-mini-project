import axios from "axios";

const tmdbInstance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: "9986c64c9c82e256e873a33de451a009",
  },
});

export default tmdbInstance;
