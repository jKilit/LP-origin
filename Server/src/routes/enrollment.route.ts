import express from "express";
const router = express.Router();
import { enrollUserInCourse } from "../controllers/enrollment.controller.ts";
import { verifyToken } from "../middleware/verifyToken.ts";

router.post("/enrollUserInCourse", verifyToken, enrollUserInCourse)

export default router;
