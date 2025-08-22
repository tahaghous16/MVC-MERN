import express from "express";
import controller from "../controllers/user.controller.js";
import passport from "../middleware/auth.middleware.js";
const { createUser, readUser } = controller;
const router = express.Router();
const app = express();

app.use(passport.initialize());
const localAuthMiddleware = passport.authenticate("local", { session: false });

router.post("/", createUser);
router.get("/getuser", localAuthMiddleware, readUser);

export default router;
