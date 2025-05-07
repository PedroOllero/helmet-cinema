const API_URL = import.meta.env.VITE_API_URL;

const getMovieById = async (id) => {
    const response = await fetch(`${API_URL}/movies/${id}`);
    if (!response.ok) {
      throw new Error("Failed to fetch movies");
    }
    return response.json();
  };
  
  export default getMovieById;