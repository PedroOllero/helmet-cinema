import { Request, RequestHandler, Response } from "express";
import { prisma } from "../lib/prisma";

export const getAllMovies = async (req: Request, res: Response) => {
  const movies = await prisma.movie.findMany({
    include: {
      sessions: true,
    },
  });
  res.json(movies);
};


export const getMovieById: RequestHandler<{ id: string }> = async (req, res) => {
  const id = req.params.id;
  const movie = await prisma.movie.findUnique({  where: { id },
    include: {
      sessions: true,
    }, });
  if (!movie) {
    res.status(404).json({ message: "Movie not found" });
    return;
  }
  res.json(movie);
};

export const createMovie = async (req: Request, res: Response) => {
  const { title, description, imageUrl, genre } = req.body;
  const newMovie = await prisma.movie.create({
    data: { title, description, imageUrl, genre}
  });

  res.status(201).json(newMovie);
};

export const addSession = async (req: Request, res: Response) => {
  const { movieId, time } = req.body;

  try {
    const session = await prisma.session.create({
      data: {
        time,
        movieId,
      },
    });
    res.json(session);
  } catch (err) {
    res.status(500).json({ error: "Failed to add session" });
  }
};