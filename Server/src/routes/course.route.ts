import express from "express";
const router = express.Router();
import { createCourse } from "../controllers/course.controller.ts";
import { verifyToken } from "../middleware/verifyToken.ts";

router.post("/createCourse", verifyToken, createCourse)

export default router;
