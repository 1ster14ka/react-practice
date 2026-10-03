import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3";

export const formateImg = (img) => {
  return `https://image.tmdb.org/t/p/w500${img}`;
};

export const getTrandingFilms = async (page = 1) => {
  const { data } = await axios.get("/trending/movie/day", {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMTcyMzdiYThlYzk3Y2I5YmY4YWMxNjdlM2VmNDJkMyIsIm5iZiI6MTczNjY4NDI1OS4xNDcsInN1YiI6IjY3ODNiMmUzZWU4NGZhNGRlZjdiNjQyZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.q2ceczyLEL1cRSn6X9Gof8gzV6HUEhRyOU2yawQM6oU",
    },
    params: {
      language: "en-US",
      page,
    },
  });
  return data;
};

export const searchFilm = async (query, page = 1) => {
  const { data } = await axios.get("/search/movie", {
    params: {
      query,
      page,
    },
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMTcyMzdiYThlYzk3Y2I5YmY4YWMxNjdlM2VmNDJkMyIsIm5iZiI6MTczNjY4NDI1OS4xNDcsInN1YiI6IjY3ODNiMmUzZWU4NGZhNGRlZjdiNjQyZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.q2ceczyLEL1cRSn6X9Gof8gzV6HUEhRyOU2yawQM6oU",
    },
  });
  return data;
};

export const detailsFilm = async (id) => {
  const data = await axios.get(`/movie/${id}`, {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMTcyMzdiYThlYzk3Y2I5YmY4YWMxNjdlM2VmNDJkMyIsIm5iZiI6MTczNjY4NDI1OS4xNDcsInN1YiI6IjY3ODNiMmUzZWU4NGZhNGRlZjdiNjQyZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.q2ceczyLEL1cRSn6X9Gof8gzV6HUEhRyOU2yawQM6oU",
    },
  });
  return data;
};

export const getActors = async (id) => {
  const { data } = await axios.get(`/movie/${id}/credits`, {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMTcyMzdiYThlYzk3Y2I5YmY4YWMxNjdlM2VmNDJkMyIsIm5iZiI6MTczNjY4NDI1OS4xNDcsInN1YiI6IjY3ODNiMmUzZWU4NGZhNGRlZjdiNjQyZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.q2ceczyLEL1cRSn6X9Gof8gzV6HUEhRyOU2yawQM6oU",
    },
  });
  return data;
};

export const getInfoAboutTheFilm = async (id) => {
  const data = await axios.get(`/movie/${id}/reviews`, {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMTcyMzdiYThlYzk3Y2I5YmY4YWMxNjdlM2VmNDJkMyIsIm5iZiI6MTczNjY4NDI1OS4xNDcsInN1YiI6IjY3ODNiMmUzZWU4NGZhNGRlZjdiNjQyZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.q2ceczyLEL1cRSn6X9Gof8gzV6HUEhRyOU2yawQM6oU",
    },
  });
  return data;
};
