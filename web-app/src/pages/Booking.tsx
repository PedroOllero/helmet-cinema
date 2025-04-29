import { useParams } from "react-router-dom";
import { movies } from "../const/movies";

const Booking = () => {
  const { id } = useParams<{ id: string }>();

  const movie = movies.find((m) => m.id === Number(id));

  if (!movie) {
    return <div>Movie not found</div>;
  }

  return (
    <div className="flex flex-col min-h-[91dvh] p-5">
      <img src={movie.image_url} alt={movie.title} className="w-80 mx-auto object-cover mb-5" />
      <h1 className="text-3xl font-bold mt-4">{movie.title}</h1>
      <p className="mt-2">{movie.description}</p>
      <p className="mt-2 text-red-400">{movie.genre}</p>
    </div>
  );
}

export default Booking;