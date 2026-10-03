import { Link } from "react-router-dom";
import { formateImg } from "../../../../api-films";
import s from "./MovieList.module.css";

const MovieList = ({ films, location }) => {
  return (
    <ul className={s.list}>
      {films.map(
        ({ id, original_title, release_date, vote_average, backdrop_path }) => (
          <li key={id} className={s.item}>
            <Link to={`/movies/${id}`} state={location} className={s.link}>
              <p>{original_title}</p>
              <img src={formateImg(backdrop_path)} className={s.image} />
              <p>Realese: {release_date}</p>
              <p>Rating: {vote_average.toFixed(1)}</p>
            </Link>
          </li>
        ),
      )}
    </ul>
  );
};

export default MovieList;
