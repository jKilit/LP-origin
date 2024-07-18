import express from "express";
const router = express.Router();
import { createCourse, getCourses, getCourseById, getCoursesByUserId } from "../controllers/course.controller.ts";
import { verifyToken } from "../middleware/verifyToken.ts";

router.post("/createCourse", verifyToken, createCourse)
router.get("/allCourses", getCourses)
router.get("/:id", getCourseById)
router.get("/instructorCourses/:id", getCoursesByUserId)

export default router;
