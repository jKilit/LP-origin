import prisma from "../lib/prisma";
import { Request, Response } from "express";

interface CourseRequestBody {
    title: string;
    description: string;
    modules: {
        title: string;
        description: string;
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
                        description: module.description,
                        lessons: {
                            create: module.lessons.map((lesson) => ({
                                title: lesson.title,
                                content: lesson.content || "",
                                videoUrl: lesson.type === "video" ? lesson.url : "",
                                resources: lesson.type === "article" ? [lesson.url] : [],
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
