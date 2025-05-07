import { Link } from "react-router-dom";
import { Movie } from "../types/movie";

export const MovieSection: React.FC<{ movie: Movie }> = ({ movie }) => {
  return (
    <Link to={`/booking/${movie.id}`}>
      <div
        key={`"${movie.id}"`}
        className="px-4 py-8 flex flex-row gap-6 border-b-1 border-red-900"
      >
        <img
          src={movie.imageUrl}
          alt={movie.title}
          className="w-36 h-58 object-cover"
        />
        <div className="flex flex-col justify-between">
          <div>
            <h2 className="text-2xl font-semibold">{movie.title}</h2>
            <p className="text-sm text-red-400">{movie.genre}</p>
          </div>
          <div className="flex flex-row">
             {movie.sessions.map((session) => (
              <span
                key={session.id}
                className="text-sm text-black bg-green-500 p-2 w-12 flex justify-center hover-standard m-1"
              >
                {session.time}
              </span>
            ))}
          </div>
          <p className="text-xs text-gray-300">{movie.description}</p>
        </div>
      </div>
    </Link>
  );
};
