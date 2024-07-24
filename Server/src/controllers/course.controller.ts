import prisma from "../lib/prisma";
import { Request, Response } from "express";

interface CourseRequestBody {
    title: string;
    description: string;
    price: number;
    image?: string;
    modules: {
        title: string;
        lessons: {
            title: string;
            url: string;
            content?: string;
            resources?: string[];
        }[];
    }[];
}

export const createCourse = async (req: Request, res: Response) => {
    const { title, image, description, modules, price } = req.body as CourseRequestBody;

    const loggedInUserId = req.userId;

    if (!title || !description || !loggedInUserId || !modules) {
        return res.status(400).json({ error: "Please provide all required fields: title, description, modules" });
    }

    try {
        const newCourse = await prisma.course.create({
            data: {
                title,
                description,
                image: image || "",
                category: "",
                tags: [],
                prerequisites: [],
                createdAt: new Date(),
                price,
                instructor: {
                    connect: {
                        id: loggedInUserId,
                    },
                },
                modules: {
                    create: modules.map((module) => ({
                        title: module.title,
                        lessons: {
                            create: module.lessons.map((lesson) => ({
                                title: lesson.title,
                                content: lesson.content || "",
                                videoUrl: lesson.url || "",
                                resources: lesson.resources || [], // Include resources here
                            })),
                        },
                    })),
                },
            },
            include: {
                modules: {
                    include: {
                        lessons: true,
                    },
                },
                instructor: true,
            },
        });

        return res.status(201).json(newCourse);
    } catch (error) {
        console.error("Error creating course:", error);
        return res.status(500).json({ error: "An error occurred while creating the course" });
    }
};

export const getCourses = async (req: Request, res: Response) => {
    try {
        const courses = await prisma.course.findMany({
            include: {
                instructor: {
                    select: {
                        username: true,
                    }
                },
                modules: {
                    include: {
                        lessons: true,
                    },
                },
            },
        });

        return res.status(200).json(courses);
    } catch (error) {
        console.error("Error fetching courses:", error);
        return res.status(500).json(error.message);
    }
};

export const getCourseById = async (req: Request, res: Response) => {
    const courseId = req.params.id;

    if (!courseId) {
        return res.status(400).json({ error: "Please provide a course ID" });
    }

    try {
        const course = await prisma.course.findUnique({
            where: {
                id: courseId,
            },
            include: {
                instructor: {
                    select: {
                        username: true,
                    }
                },
                modules: {
                    include: {
                        lessons: true,
                    },
                },
                enrollments: {
                    select: {
                        progress: true,
                        user: {
                            select: {
                                username: true,
                            },
                        },
                    },
                },
            },
        });

        if (!course) {
            return res.status(404).json({ error: "Course not found" });
        }

        return res.status(200).json(course);
    } catch (error) {
        console.error("Error fetching course:", error);
        return res.status(500).json({ error: "An error occurred while fetching the course" });
    }
}

export const getCoursesByUserId = async (req: Request, res: Response) => {
    const userId = req.params.id;

    if (!userId) {
        return res.status(400).json({ error: "Please provide a user ID" });
    }

    try {
        const courses = await prisma.course.findMany({
            where: {
                instructorId: userId,
            },
            include: {
                instructor: {
                    select: {
                        username: true,
                    }
                },
                modules: {
                    include: {
                        lessons: true,
                    },
                },
            },
        });

        return res.status(200).json(courses);
    } catch (error) {
        console.error("Error fetching courses:", error);
        return res.status(500).json({ error: "An error occurred while fetching courses" });
    }
}

export const enrollUserInCourse = async (req: Request, res: Response) => {
    const { userId, courseId } = req.body;

    if (!userId || !courseId) {
        return res.status(400).json({ error: 'User ID and Course ID are required' });
    }

    try {
        const user = await prisma.user.findUnique({ where: { id: userId } });
        const course = await prisma.course.findUnique({ where: { id: courseId } });

        if (!user || !course) {
            return res.status(404).json({ error: 'User or Course not found' });
        }

        const existingEnrollment = await prisma.enrollment.findFirst({
            where: { userId, courseId },
        });

        if (existingEnrollment) {
            return res.status(400).json({ error: 'User is already enrolled in this course' });
        }

        const enrollment = await prisma.enrollment.create({
            data: {
                userId,
                courseId,
                progress: 0,
            },
        });

        return res.status(201).json(enrollment);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Internal server error' });
    }
};
