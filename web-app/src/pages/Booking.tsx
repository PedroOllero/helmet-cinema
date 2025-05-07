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
    if(sessionId == selectedSession){
      setSelectedSession("")
    }
  };

  if (!movie) {
    return <div>Movie not found</div>;
  }
  
  return (
    <div className="min-h-[91dvh] p-5 lg:flex lg:flex-row">
      <div className="flex flex-row lg:w-200 lg:border-r-2 lg:border-red-500">
        <img src={movie.imageUrl} alt={movie.title} className="h-50 lg:h-125" />
        <div className="px-3 flex flex-col justify-between">
          <div>
            <h1 className="text-xl font-bold lg:text-3xl">{movie.title}</h1>
            <p className="text-red-400 lg:text-2xl">{movie.genre}</p>
          </div>
          <p className="text-xs text-gray-200 lg:text-xl">{movie.description}</p>
        </div>
      </div>
      <div className="mt-10 flex flex-col lg:my-auto lg:mx-5">
        <p className="text-2xl">Upcoming Showings For Today</p>
        <p className="text-red-400">Pick the session you want to book:</p>
        <div className="flex flex-row mt-5">
          {movie.sessions.map((session) => (
            <button
              key={session.id}
              className={`p-2 m-1 text-white transition-all duration-200 ease-in-out cursor-pointer ${
                selectedSession === session.id
                  ? "bg-red-600"
                  : "bg-green-500"
              }`}
              onClick={() => handleSelectSession(session.id)}
            >
              {session.time}
            </button>
          ))}
        </div>
        <button className={`p-2 mt-20  ${
                selectedSession === ""
                  ? "bg-red-400"
                  : "bg-red-600 hover-standard cursor-pointer"
              }`}>
          Get my tickets!
        </button>
      </div>
    </div>
  );
};

export default Booking;
