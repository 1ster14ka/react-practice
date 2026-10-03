import { useEffect, useState } from "react";
import { detailsFilm, formateImg } from "../../../../api-films";
import { Link, Outlet, useParams } from "react-router-dom";
import Navigation from "../Navigation/Navigation";

const MovieDetailsPage = () => {
  const [details, setDetails] = useState(null);

  const { movieId } = useParams();

  useEffect(() => {
    const fetchDetailsFilm = async () => {
      try {
        const { data } = await detailsFilm(movieId);
        setDetails(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchDetailsFilm();
  }, [movieId]);
  if (!details) {
    return;
  }
  return (
    <div>
      <Navigation />
      <img src={formateImg(details.backdrop_path)} alt="" />
      <Link to="cast">Cast</Link>
      <Link to="reviews">Reviews</Link>
      <Outlet />
    </div>
  );
};

export default MovieDetailsPage;
