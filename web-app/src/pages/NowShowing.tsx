import { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import getAllMovies from "../services/getAllMovies";

const NowShowing: React.FC = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getAllMovies()
      .then((movies) => setMovies(movies))
      .catch((error) => console.error("Error fetching movies:", error));
  }, []);

  return (
    <div className="flex flex-col min-h-[91dvh] p-5 ">
      <div>
        {movies.map((movie) => (
          <Link to={`/booking/${movie.id}`}>
              <div key={movie.id} className="px-4 py-8 flex flex-row gap-6 border-b-1 border-red-900">
                <img
                  src={movie.image_url}
                  alt={movie.title}
                  className="w-36 h-58 object-cover"
                />
                <div className="flex flex-col justify-between">
                  <div>
                    <h2 className="text-2xl font-semibold">{movie.title}</h2>
                    <p className="text-sm text-red-400">{movie.genre}</p>
                  </div>
                  <div>
                    <p className="text-s font-extralight text-gray-200">
                      {movie.description}
                    </p>
                  </div>
                </div>
              </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default NowShowing;
