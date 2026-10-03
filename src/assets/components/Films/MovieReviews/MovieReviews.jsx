import { useEffect, useState } from "react";
import { getInfoAboutTheFilm } from "../../../../api-films";
import { useParams } from "react-router-dom";

const MovieReviews = () => {
  const [review, setReview] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    const fetchReview = async () => {
      try {
        const data = await getInfoAboutTheFilm(movieId);

        setReview(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchReview();
  }, [movieId]);
  return <div>Reviews</div>;
};

export default MovieReviews;
