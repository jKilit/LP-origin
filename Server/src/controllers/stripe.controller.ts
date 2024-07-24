import { PrismaClient } from '@prisma/client';
import Stripe from 'stripe';
import { Request, Response } from 'express';

const prisma = new PrismaClient();
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, { apiVersion: '2024-06-20' });

interface ReqBody {
    courseId: string;
}


export const createCheckoutSession = async (req: Request, res: Response) => {
    const { courseId } = req.body;
    const course = await prisma.course.findUnique({
        where: { id: courseId },
    });

    if (!course) {
        return res.status(404).json({ error: "Course not found" });
    }

    try {
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ["card"],
            line_items: [
                {
                    price_data: {
                        currency: "usd",
                        product_data: {
                            name: course.title,
                        },
                        unit_amount: course.price * 100,
                    },
                    quantity: 1,
                },
            ],
            mode: "payment",
            success_url: `${process.env.CLIENT_URL}/courses`,
            cancel_url: `${process.env.CLIENT_URL}/courses`,
        });

        return res.status(200).json({ id: session.id });
    } catch (error) {
        console.error("Error creating checkout session:", error);
        return res.status(500).json({ error: error.message });
    }
}
export const createPaymentIntent = async (req: Request, res: Response) => {
    const { courseId } = req.body;
    const course = await prisma.course.findUnique({
        where: { id: courseId },
    });

    if (!course) {
        return res.status(404).json({ error: "Course not found" });
    }

    try {
        const paymentIntent = await stripe.paymentIntents.create({
            amount: course.price * 100,
            currency: 'usd',
            metadata: { integration_check: 'accept_a_payment' },
        });

        return res.status(200).json({ client_secret: paymentIntent.client_secret });
    } catch (error) {
        console.error("Error creating payment intent:", error);
        return res.status(500).json({ error: error.message });
    }
}