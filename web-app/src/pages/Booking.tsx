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
    })
  }, [id]);

  if (!movie) {
    return <div>Movie not found</div>;
  }

  return (
    <div className="flex flex-col min-h-[91dvh] p-5">
      <img src={movie.imageUrl} alt={movie.title} className="w-80 mx-auto object-cover mb-5" />
      <h1 className="text-3xl font-bold mt-4">{movie.title}</h1>
      <p className="mt-2">{movie.description}</p>
      <p className="mt-2 text-red-400">{movie.genre}</p>
    </div>
  );
}

export default Booking;