const getMovieById = async (id) => {
    const response = await fetch(`http://localhost:3000/movies/${id}`);
    if (!response.ok) {
      throw new Error("Failed to fetch movies");
    }
    return response.json();
  };
  
  export default getMovieById;