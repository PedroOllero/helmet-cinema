import { Request, Response } from "express";
import { movies } from "../data/movies";

export const getAllMovies = (req: Request, res: Response) => {
  res.json(movies);
};

export const getMovieById = (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const movie = movies.find((m) => m.id === id);

  if (!movie) {
    return res.status(404).json({ message: "Movie not found" });
  }

  res.json(movie);
};