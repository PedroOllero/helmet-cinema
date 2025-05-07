const API_URL = import.meta.env.VITE_API_URL;

const getAllMovies = async () => {
  const response = await fetch(`${API_URL}/movies`);
  if (!response.ok) {
    throw new Error("Failed to fetch movies");
  }
  return response.json();
};

export default getAllMovies;