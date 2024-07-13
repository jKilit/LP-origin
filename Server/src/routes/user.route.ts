import express from "express";
const router = express.Router();
import { getUsers, getUser } from "../controllers/user.controller";

router.get("/", getUsers)
router.get("/:id", getUser)
//router.post("/", createUser)


export default router;