import { Request, Response } from 'express';
import prisma from "../lib/prisma";

export const enrollUserInCourse = async (req: Request, res: Response) => {
    const { userId, courseId } = req.body;

    if (!userId || !courseId) {
        return res.status(400).json({ error: 'User ID and Course ID are required' });
    }

    try {
        // Check if the user and course exist
        const user = await prisma.user.findUnique({ where: { id: userId } });
        const course = await prisma.course.findUnique({ where: { id: courseId } });

        if (!user || !course) {
            return res.status(404).json({ error: 'User or Course not found' });
        }

        // Check if the user is already enrolled in the course
        const existingEnrollment = await prisma.enrollment.findFirst({
            where: { userId, courseId },
        });

        if (existingEnrollment) {
            return res.status(400).json({ error: 'User is already enrolled in this course' });
        }

        // Enroll the user in the course
        const enrollment = await prisma.enrollment.create({
            data: {
                userId,
                courseId,
                progress: 0, // initial progress
            },
        });

        return res.status(201).json(enrollment);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Internal server error' });
    }
};

export const getEnrollmentsForUser = async (req: Request, res: Response) => {
    const { userId } = req.params;

    if (!userId) {
        return res.status(400).json({ error: 'User ID is required' });
    }

    try {
        const enrollments = await prisma.enrollment.findMany({
            where: { userId },
            include: {
                course:{
                    include: {
                        instructor: true,
                    },
                }
            },
        });

        return res.status(200).json(enrollments);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Internal server error' });
    }
};