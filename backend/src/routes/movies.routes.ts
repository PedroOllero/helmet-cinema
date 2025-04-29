import express from "express";
import { getAllMovies, getMovieById } from "../controllers/movies.controller";

const router = express.Router();

router.get("/", getAllMovies);
router.get("/:id", getMovieById);

export default router;