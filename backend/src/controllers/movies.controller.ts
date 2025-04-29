import { Request, RequestHandler, Response } from "express";
import { movies } from "../data/movies";

export const getAllMovies = (req: Request, res: Response) => {
  res.json(movies);
};

export const getMovieById: RequestHandler<{ id: string }> = (req, res) => {
  const id = Number(req.params.id);
  const movie = movies.find((m) => m.id === id);
  if (!movie) {
    res.status(404).json({ message: "Movie not found" });
    return;
  }
  res.json(movie);
};