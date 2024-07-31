# Learning Platform Schema

This project is a web application for managing educational courses. It consists of a client-side application built with React and a server-side REST API built with Node.js and Express.

## Table of Contents

- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [Project Structure](#project-structure)
- [Dependencies](#dependencies)
- [API Endpoints](#api-endpoints)
- [Example Courses](#example-courses)
- [Learn More](#learn-more)

## Getting Started

### Prerequisites

- Node.js
- npm or yarn
- MongoDB

### Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/yourusername/learning-platform.git
    ```

2. Install dependencies for the client:
    ```sh
    cd client
    npm install
    ```

3. Install dependencies for the server:
    ```sh
    cd ../server
    npm install
    ```

4. Set up environment variables:

   Create a `.env` file in the `server` directory and add the following:

    ```env
    PORT=5000
    MONGO_URI=your_mongodb_connection_string
    JWT_SECRET=your_jwt_secret
    ```

### Running the Application

1. Start the server:
    ```sh
    cd server
    npm run dev
    ```

2. Start the client:
    ```sh
    cd ../client
    npm start
    ```

Open [http://localhost:3000](http://localhost:3000) to view the client application in your browser.

## Available Scripts

### Client

In the `client` directory, you can run:

- `npm start`: Runs the app in development mode.
- `npm test`: Launches the test runner in interactive watch mode.
- `npm run build`: Builds the app for production.
- `npm run eject`: Ejects the configuration files and dependencies.

### Server

In the `server` directory, you can run:

- `npm start`: Starts the server.
- `npm run dev`: Starts the server with nodemon for development.

## Dependencies

### Client

- `react`: JavaScript library for building user interfaces.
- `react-scripts`: Scripts and configuration used by Create React App.
- `react-router-dom`: Declarative routing for React.js.
- `axios`: Promise-based HTTP client for the browser and Node.js.
- `bootstrap`: Front-end framework for building responsive, mobile-first sites.
- `sass`: CSS preprocessor for adding additional features to CSS.

### Server

- `express`: Web framework for Node.js.
- `mongoose`: MongoDB object modeling tool.
- `jsonwebtoken`: JSON Web Token implementation.
- `bcryptjs`: Library to hash passwords.
- `body-parser`: Node.js body parsing middleware.
- `cookie-parser`: Parse Cookie header and populate req.cookies.
- `cors`: Middleware to enable CORS.
- `dotenv`: Loads environment variables from a .env file.
- `nodemon`: Utility that monitors for changes in source and automatically restarts the server.

## API Endpoints

### Courses

- `GET /api/courses`: Fetch all courses.
- `POST /api/courses`: Create a new course.
- `GET /api/courses/:id`: Get course by ID.
- `PUT /api/courses/:id`: Update course by ID.
- `DELETE /api/courses/:id`: Delete course by ID.

### Users

- `POST /api/users`: Create a new user.
- `GET /api/users/:id`: Get user by ID.
- `PUT /api/users/:id`: Update user by ID.
- `DELETE /api/users/:id`: Delete user by ID.

### Authentication

- `POST /api/auth/login`: Login a user.
- `POST /api/auth/register`: Register a new user.

### Enrollments

- `POST /api/enrollments`: Enroll a user in a course.
- `GET /api/enrollments/:userId`: Get all enrollments for a user.


