import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import getMovieById from "../services/getMovie";
import { Movie } from "../types/movie";

const Booking = () => {
  const { id } = useParams<{ id: string }>();
  const [movie, setMovie] = useState<Movie>(null);
  const [selectedSession, setSelectedSession] = useState("");

  useEffect(() => {
    getMovieById(id)
      .then((movie) => {
        setMovie(movie);
      })
      .catch((error) => {
        console.error("Error fetching movie:", error);
      });
  }, [id]);

  const handleSelectSession = (sessionId:string) => {
    if(sessionId){
      setSelectedSession(sessionId)
    }
  };

  if (!movie) {
    return <div>Movie not found</div>;
  }
  
  return (
    <div className="min-h-[91dvh] p-5">
      <div className="flex flex-row ">
        <img src={movie.imageUrl} alt={movie.title} className="h-50" />
        <div className="px-3 flex flex-col justify-between">
          <div>
            <h1 className="text-xl font-bold">{movie.title}</h1>
            <p className="text-red-400">{movie.genre}</p>
          </div>
          <p className="text-xs text-gray-200">{movie.description}</p>
        </div>
      </div>
      <div className="mt-10 flex flex-col">
        <p className="text-2xl">Upcoming Showings For Today</p>
        <p className="text-red-400">Pick the session you want to book:</p>
        <div className="flex flex-row mt-5">
          {movie.sessions.map((session) => (
            <button
              key={session.id}
              className={`p-2 m-1 text-white cursor-pointer ${
                selectedSession === session.id
                  ? "bg-orange-500"
                  : "bg-green-500"
              }`}
              onClick={() => handleSelectSession(session.id)}
            >
              {session.time}
            </button>
          ))}
        </div>
        <button className="bg-red-400 p-2 mt-20 hover-standard">
          Get my tickets!
        </button>
      </div>
    </div>
  );
};

export default Booking;
