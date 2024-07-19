import bcrypt from "bcrypt";
import prisma from "../lib/prisma";
import jwt from "jsonwebtoken";
import { Request, Response } from "express";

export const register = async (req: Request, res: Response) => {
    const { username, email, password, confirmPassword, role } = req.body;
    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        if (password !== confirmPassword) {
            return res.status(400).json({ error: "Passwords do not match" });
        }
        const newUser = await prisma.user.create({
            data: {
                username,
                email,
                password: hashedPassword,
                role: role,
            },
        });

        console.log(newUser);
        res.status(201).json({ message: "User created successfully" });
    } catch (error) {
        res.status(500).json( error.message );
    }
};

export const login = async (req: Request, res: Response) => {
    const { username, password } = req.body;
    try {
        const user = await prisma.user.findUnique({
            where: { username },
        });

        if (!user) {
            return res.status(401).json({ error: "Invalid credentials" });
        }

        const passwordMatch = await bcrypt.compare(password, user.password);
        if (!passwordMatch) {
            return res.status(401).json({ error: "Invalid credentials" });
        }

        const age = 1000 * 60 * 60 * 24 * 7;
        const token = jwt.sign(
            {
                id: user.id,
                isAdmin: false,
            },
            process.env.JWT_SECRET_KEY,
            { expiresIn: age }
        );

        const { password: userPassword, ...userInfo } = user;
        res
            .cookie("token", token, {
                httpOnly: true,
                //secure: true,//in production
                maxAge: age,
            })
            .status(200)
            .json({ user: userInfo, message: "Logged in" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Failed to login", error });
    }
};

export const logout = (req: Request, res: Response) => {
    res.clearCookie("token").json({ message: "Logged out" });
};
