import express from "express";
const router = express.Router();
import { createCourse, getCourses, getCourseById, getCoursesByUserId, deleteCourse } from "../controllers/course.controller.ts";
import { verifyToken } from "../middleware/verifyToken.ts";

router.post("/createCourse", verifyToken, createCourse)
router.get("/allCourses", getCourses)
router.get("/:id", getCourseById)
router.get("/instructorCourses/:id", getCoursesByUserId)
router.delete("/:id", verifyToken, deleteCourse); // Add this line

export default router;
