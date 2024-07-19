import express from "express";
const router = express.Router();
import { enrollUserInCourse, getEnrollmentsForUser } from "../controllers/enrollment.controller.ts";
import { verifyToken } from "../middleware/verifyToken.ts";

router.post("/enrollUserInCourse", verifyToken, enrollUserInCourse)
router.get("/:userId", getEnrollmentsForUser)

export default router;
