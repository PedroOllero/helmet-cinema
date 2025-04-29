import express from "express";
import cors from "cors";
import moviesRoutes from "./routes/movies.routes";

const app = express();
app.use(cors());
app.use(express.json());

app.use("/movies", moviesRoutes);

app.listen(3000, () => {
  console.log("🚀 Server running on http://localhost:3000");
});