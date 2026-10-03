import { useEffect, useState } from "react";
import { searchFilm } from "../../../../api-films";
import MovieList from "../MovieList/MovieList";
import { Outlet, useLocation, useSearchParams } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import ButtonPrev from "../ButtonPrev/ButtonPrev";
import ButtonNext from "../ButtonNext/ButtonNext";

const MoviesPage = () => {
  const [films, setFilms] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [totalPages, setTotalPages] = useState(1);

  const location = useLocation();
  const page = Number(searchParams.get("page") || 1);
  const query = searchParams.get("query") || "";

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const inputValue = evt.target.elements.film.value.trim();

    searchParams.set("query", inputValue);
    setSearchParams((prev) => {
      const next = new URLSearchParams(prev);
      next.set("query", inputValue);
      next.set("page", 1);
      return next;
    });
  };
  useEffect(() => {
    if (!query) {
      return;
    }

    const fetchQueryFilm = async () => {
      try {
        const { results, total_pages } = await searchFilm(query, page);
        setTotalPages(total_pages);
        setFilms(results);
      } catch (error) {
        console.log(error);
      }
    };
    fetchQueryFilm();
  }, [query, page]);

  const nextPage = () => {
    setSearchParams((prev) => {
      const next = new URLSearchParams(prev);
      next.set("page", String(page + 1));
      return next;
    });
  };
  const prevPage = () => {
    setSearchParams((prev) => {
      const next = new URLSearchParams(prev);
      next.set("page", String(page - 1));
      return next;
    });
  };

  return (
    <div>
      <Navigation />
      <p>Movies</p>
      <form onSubmit={handleSubmit}>
        <input type="text" name="film" />
        <button type="submit">Enter</button>
      </form>
      {films && <MovieList films={films} location={location} />}
      {page > 1 && <ButtonPrev prevPage={prevPage} />}
      {totalPages > page && <ButtonNext nextPage={nextPage} />}
      <Outlet />
    </div>
  );
};

export default MoviesPage;
