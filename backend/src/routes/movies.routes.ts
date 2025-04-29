import express from "express";
import { getAllMovies, getMovieById } from "../controllers/movies.controllers";


const router = express.Router();

router.get("/", getAllMovies);

export default router;