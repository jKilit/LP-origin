import express from "express";
const router = express.Router();
import { createCourse, getCourses } from "../controllers/course.controller.ts";
import { verifyToken } from "../middleware/verifyToken.ts";

router.post("/createCourse", verifyToken, createCourse)
router.get("/allCourses", getCourses)

export default router;
