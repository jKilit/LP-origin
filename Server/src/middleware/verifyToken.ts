import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";

// Extend the Request interface to include userId
declare module "express-serve-static-core" {
    interface Request {
        userId?: string;
    }
}

export const verifyToken = async (req: Request, res: Response, next: NextFunction) => {
    const token = req.cookies.token;
    if (!token) return res.status(401).json({ message: "Unauthorized" });

    jwt.verify(token, process.env.JWT_SECRET_KEY as string, (err: jwt.VerifyErrors | null, payload: any) => {
        if (err) return res.status(403).json({ message: "Token is not valid" });
        req.userId = payload.id;
        next();
    });
};
