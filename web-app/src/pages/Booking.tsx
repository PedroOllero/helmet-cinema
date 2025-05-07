import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import getMovieById from "../services/getMovie";
import { Movie } from "../types/movie";

const Booking = () => {
  const { id } = useParams<{ id: string }>();
  const [movie, setMovie] = useState<Movie>(null);

  useEffect(() => {
    getMovieById(id)
      .then((movie) => {
        setMovie(movie);
      })
      .catch((error) => {
        console.error("Error fetching movie:", error);
      });
  }, [id]);

  if (!movie) {
    return <div>Movie not found</div>;
  }

  return (
    <div className="min-h-[91dvh] p-5">
      <div className="flex flex-row ">
        <img
          src={movie.imageUrl}
          alt={movie.title}
          className="h-50"
        />
        <div className="px-3 flex flex-col justify-between">
          <div>
          <h1 className="text-xl font-bold">{movie.title}</h1>
          <p className="text-red-400">{movie.genre}</p>
          </div>
          <p className="text-xs text-gray-200">{movie.description}</p>
        </div>
      </div>
      <div>
        <p>Selecciona la sessión a la que quieres ir</p>
      </div>
    </div>
  );
};

export default Booking;
