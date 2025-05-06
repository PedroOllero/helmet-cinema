import { useEffect, useState } from "react";
import getAllMovies from "../services/getAllMovies";
import { MovieSection } from "../components/MovieSection";

const NowShowing: React.FC = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getAllMovies()
      .then((movies) => setMovies(movies))
      .catch((error) => console.error("Error fetching movies:", error));
  }, []);

  return (
    <div className="flex flex-col min-h-[91dvh] p-5 ">
      <img/>
      <div>
        {movies.map((movie) => (
          <MovieSection movie={movie}/>
        ))}
      </div>
    </div>
  );
};

export default NowShowing;
