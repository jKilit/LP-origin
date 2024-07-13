import express from "express";
const router = express.Router();
import { login, logout, register } from "../controllers/auth.controller.ts";

router.post("/register", register)
router.post("/logout", logout)
router.post("/login", login)

export default router;
