import { Request, RequestHandler, Response } from "express";
import { prisma } from "../lib/prisma";

export const getAllMovies = async (req: Request, res: Response) => {
  const movies = await prisma.movie.findMany();
  res.json(movies);
};


export const getMovieById: RequestHandler<{ id: string }> = async (req, res) => {
  const id = Number(req.params.id);
  const movie = await prisma.movie.findUnique({ where: { id } });
  if (!movie) {
    res.status(404).json({ message: "Movie not found" });
    return;
  }
  res.json(movie);
};

export const createMovie = async (req: Request, res: Response) => {
  const { title, description, imageUrl, genre } = req.body;
  const newMovie = await prisma.movie.create({
    data: { title, description, imageUrl, genre }
  });

  res.status(201).json(newMovie);
};