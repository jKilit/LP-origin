import prisma from "../lib/prisma";
import { Request, Response } from "express";

interface CourseRequestBody {
    title: string;
    description: string;
    modules: {
        title: string;
        lessons: {
            title: string;
            type: string;
            url: string;
            content?: string;
        }[];
    }[];
}

export const createCourse = async (req: Request, res: Response) => {
    const { title, description, modules } = req.body as CourseRequestBody;

    // Assuming you have authenticated user information available in req.user
    const loggedInUserId = req.userId; // Adjust this according to your authentication setup

    if (!title || !description || !loggedInUserId || !modules) {
        return res.status(400).json({ error: "Please provide all required fields: title, description, modules" });
    }

    try {
        const newCourse = await prisma.course.create({
            data: {
                title,
                description,
                category: "",
                tags: [],
                prerequisites: [],
                createdAt: new Date(),
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
                                resources: [],
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
        return res.status(500).json({ error: "An error occurred while fetching courses" });
    }
};