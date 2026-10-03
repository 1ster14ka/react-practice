import { useEffect, useState } from "react";
import Navigation from "../Navigation/Navigation";
import { getTrandingFilms } from "../../../../api-films";
import { useLocation, useSearchParams } from "react-router-dom";
import MovieList from "../MovieList/MovieList";
import s from "./HomePage.module.css";
import ButtonNext from "../ButtonNext/ButtonNext";
import ButtonPrev from "../ButtonPrev/ButtonPrev";

const HomePage = () => {
  const [films, setFilms] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const [totalPages, setTotalPages] = useState(1);
  const location = useLocation();

  const page = Number(searchParams.get("page")) || 1;

  useEffect(() => {
    const fetchTrendingFilms = async () => {
      try {
        const data = await getTrandingFilms(page);
        setFilms(data.results);
        setTotalPages(data.total_pages);
      } catch (error) {
        console.log(error);
      }
    };
    fetchTrendingFilms();
  }, [page]);

  const nextPage = () => {
    setSearchParams({ page: String(page + 1) });
  };
  const prevPage = () => {
    setSearchParams({ page: String(page - 1) });
  };
  return (
    <div className={s.wrapperHome}>
      <Navigation />
      <h1 className={s.title}>Trending today</h1>
      {films && <MovieList films={films} location={location} />}
      {page > 1 && <ButtonPrev prevPage={prevPage} />}
      {totalPages > page && <ButtonNext nextPage={nextPage} />}
    </div>
  );
};

export default HomePage;
