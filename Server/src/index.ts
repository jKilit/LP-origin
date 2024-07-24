import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import { PrismaClient } from '@prisma/client';
import userRoutes from './routes/user.route';
import authRoutes from './routes/auth.route';
import courseRoutes from './routes/course.route';
import enrollmentRoutes from './routes/enrollment.route';
import stripeRoutes from './routes/stripe.route';

require('dotenv').config();
const app = express();
const prisma = new PrismaClient();

app.use(express.json());
app.use(cookieParser());
app.use(cors({ origin: process.env.CLIENT_URL, credentials: true }));

app.use('/api/users', userRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/courses', courseRoutes);
app.use('/api/enrollment', enrollmentRoutes);
app.use('/api/stripe', stripeRoutes);

const PORT = process.env.PORT || 3005;

prisma.$connect()
  .then(() => {
    console.log('Database connection successful');

    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error('Database connection failed');
    console.error(error);
    process.exit(1);
  });
