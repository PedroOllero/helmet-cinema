import express from "express";
import cors from "cors";
import moviesRoutes from "./routes/movies.routes";

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.use("/movies", moviesRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});