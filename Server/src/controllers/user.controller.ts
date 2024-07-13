import prisma from "../lib/prisma.ts";
import { Request, Response } from "express";

export const getUsers = async (req: Request, res: Response) => {
    try {
        const users = await prisma.user.findMany();
        res.status(200).json(users);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Failed to get users" });
    }
};

export const getUser = async (req: Request, res: Response) => {
    const { id } = req.params;

    try {
        const user = await prisma.user.findUnique({
            where: { id: id },
        });

        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }

        res.status(200).json(user);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Failed to get user" });
    }
}

// export const createUser = async (req: Request, res: Response) => {
//     const { username, email, password } = req.body;

//     try {
//         const hashedPassword = await bcrypt.hash(password, 10);

//         const user = await prisma.user.create({
//             data: {
//                 username,
//                 email,
//                 password: hashedPassword, // Save hashed password
//             },
//         });

//         res.status(201).json(user);
//     } catch (error) {
//         console.error(error);
//         res.status(500).json(error);
//     }
// };