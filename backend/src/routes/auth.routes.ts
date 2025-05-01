import express from "express";
import { register, login } from "../controllers/auth.controller";
import { authenticate } from "../middleware/middlewares/auth.middleware";

const router = express.Router();

router.get("/profile", authenticate, (req, res) => {
  res.json({
    message: "Protected profile route",
    user: (req as any).user,
  });
});

router.post("/register", register);
router.post("/login", login);

export default router;
