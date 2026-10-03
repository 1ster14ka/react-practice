import { useEffect, useState } from "react";
import { getActors } from "../../../../api-films";
import { useParams } from "react-router-dom";

const MovieCast = () => {
  const [actors, setActors] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    const fetchAllActors = async () => {
      try {
        const data = await getActors(movieId);
        setActors(data.cast);
      } catch (error) {
        console.log(error);
      }
    };
    fetchAllActors();
  }, [movieId]);
  return (
    <div>
      <p>Movie Cast</p>
      {actors.length > 0 && (
        <ul>
          {actors.map(({ id, name }) => (
            <li key={id}>
              <p>{name}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MovieCast;
