import express from "express";
const router = express.Router();
import { verifyToken } from "../middleware/verifyToken.ts";
import { createCheckoutSession, createPaymentIntent } from "../controllers/stripe.controller.ts";

router.post("/create-checkout-session", verifyToken, createCheckoutSession)
router.post("/create-payment-intent", verifyToken, createPaymentIntent)

export default router;
