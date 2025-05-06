import { addSession } from "../controllers/movies.controller";
import router from "./movies.routes";
router.post("/sessions", addSession);